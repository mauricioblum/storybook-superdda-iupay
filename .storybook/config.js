import { configure } from '@storybook/react';
function loadStories() {
  require('../storybook/stories/index.stories');
}
configure(loadStories, module);
