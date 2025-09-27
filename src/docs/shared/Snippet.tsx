import { Appbar, Button, Card, Content, useThemeColors } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useCallback, useMemo, useState } from 'react';
import { useClipboard } from './useClipboard';

interface Props {
  code: string;
  lang: 'js' | 'sh';
  children: React.ReactNode;
  title?: string;
}

export function Snippet({ code, lang, title, children }: Props) {
  const color = useThemeColors();
  const clipboard = useClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  const lines = useMemo(() => {
    return code
      .trim()
      .split('\n')
      .filter(l => l.trim().length > 0);
  }, [code]);

  const handleCopy = useCallback(() => {
    if (copied) return;
    clipboard.copyTextToClipboard(
      lines.join('\n'),
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      },
      () => {
        console.error('Não foi possível copiar o tercho.');
      },
    );
  }, [clipboard, copied, lines]);

  const handleJSXLine = useCallback((line: string) => {
    let result = line;
    if (/<\/?>/g.test(result)) {
      const fragments = Array.from(result.matchAll(/<\/?>/g));
      fragments.forEach(fragment => {
        result = result.replace(
          fragment[0],
          `&lt;${fragment[0].includes('/') ? '/' : ''}&gt;`,
        );
      });
    }
    if (/<\/?\w+/g.test(result)) {
      const componentTag = Array.from(result.matchAll(/<\/?\w+/g));
      componentTag.forEach(component => {
        result = component[0].startsWith('</')
          ? result.replace(
              component[0],
              `&lt;/<em>${component[0].substring(2)}</em>`,
            )
          : result.replace(
              component[0],
              `&lt;<em>${component[0].substring(1)}</em>`,
            );
      });
    }
    if (/\w+=/g.test(result)) {
      const propMatch = Array.from(result.matchAll(/\w+=/g));
      propMatch.forEach(prop => {
        result = result.replace(prop[0], `<b>${prop[0].split('=')[0]}</b>=`);
      });
    }
    if (/("|')(\w+[-.]?\s?)+("|')/g.test(result)) {
      const propsValueStr = Array.from(
        result.matchAll(/("|')(\w+[-.]?\s?)+("|')/g),
      );
      propsValueStr.forEach(value => {
        result = result.replace(value[0], `<samp>${value[0]}</samp>`);
      });
    }
    if (/{\d+}/g.test(result)) {
      const propsValueNumber = Array.from(result.matchAll(/{\d+}/g));
      propsValueNumber.forEach(value => {
        result = result.replace(
          value[0],
          `{<var>${value[0].substring(1, value[0].length - 1)}</var>}`,
        );
      });
    }
    if (/\w+\(/g.test(result)) {
      const methods = Array.from(result.matchAll(/\w+\(/g));
      methods.forEach(method => {
        result = result.replace(
          method[0],
          `<em>${method[0].substring(0, method[0].length - 1)}</em>(`,
        );
      });
    }
    if (/\/{2}\s?\w+/g.test(result)) {
      const comments = Array.from(result.matchAll(/\/{2}\s?\w+/g));
      comments.forEach(comment => {
        const peace = result.substring(comment.index || 0);
        result = result.replace(peace, `<i>${peace}</i>`);
      });
    }
    if (/(const|let|function)/g.test(result)) {
      const keyWords = Array.from(result.matchAll(/(const|let|function)/g));
      keyWords.forEach(word => {
        result = result.replace(word[0], `<em>${word[0]}</em>`);
      });
    }
    if (/\s(if|else|return|import|export|from)\s/g.test(result)) {
      const blockWord = Array.from(
        result.matchAll(/(if|else|return|import|export|from)/g),
      );
      blockWord.forEach(word => {
        result = result.replace(word[0], `<kbd>${word[0]}</kbd>`);
      });
    }
    if (/({|}|\$|=|!|&|\[|\]|\(|\))+/g.test(result)) {
      result = result
        .replace(/\$/g, '<kbd>$</kbd>')
        .replace(/=/g, '<kbd>=</kbd>')
        .replace(/!/g, '<kbd>!</kbd>')
        .replace(/&{2}/g, '<kbd>&&</kbd>')
        .replace(/{/g, '<kbd>&#123;</kbd>')
        .replace(/}/g, '<kbd>&#125;</kbd>')
        .replace(/\[/g, '<em>[</em>')
        .replace(/\]/g, '<em>]</em>')
        .replace(/\(/g, '<kbd>(</kbd>')
        .replace(/\)/g, '<kbd>)</kbd>');
    }
    return result;
  }, []);

  return (
    <Card
      as="div"
      variant="elevated"
      flexbox={{ direction: 'column' }}
      style={{ overflow: 'hidden' }}
    >
      <Appbar
        headline={title}
        actions={
          <Button
            onClick={handleCopy}
            icon={
              copied ? (
                <Icon symbol="check" style={{ color: color.primary.color }} />
              ) : (
                <Icon symbol="content_copy" />
              )
            }
          >
            Copy snippet
          </Button>
        }
        style={{ zIndex: 'initial' }}
      />
      <Content
        flexbox={{
          direction: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 'lg',
          wrap: 'active',
        }}
        spacing={{ padding: 'lg' }}
        style={{ backgroundColor: color.surfaceContainer.lowest }}
      >
        {children}
      </Content>
      <pre className={lang}>
        {lines.map((line, idx) => (
          <code
            key={`${idx}_${line}`}
            dangerouslySetInnerHTML={{
              __html: lang === 'js' ? handleJSXLine(line) : line,
            }}
          />
        ))}
      </pre>
    </Card>
  );
}
