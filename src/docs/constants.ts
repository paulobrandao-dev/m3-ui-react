const isGitHubIO = location.hostname === 'paulobrandao-dev.github.io';

export const BASE_PATH = isGitHubIO ? '/m3-ui-react' : '';
