import Page from "./Page";
import Wrapper from "./ApolloWrapper";

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Wrapper, Page },
  template: '<Wrapper><Page /></Wrapper>',
});

export const Primary = Template.bind({});
