import {
  reactExtension,
  useApi,
  AdminBlock,
  BlockStack,
  Text,
  Checkbox,
  Button,
  InlineStack,
  Badge,
  Icon,
  Divider,
  Section,
} from "@shopify/ui-extensions-react/admin";

const TARGET = "admin.order-details.block.render";

export default reactExtension(TARGET, () => <App />);

function App() {
  const { i18n, data } = useApi(TARGET);
  console.log({ data });

  return (
    <AdminBlock title="Order Wizard">
      <Section>
        <BlockStack blockGap="large">
          <InlineStack inlineAlignment="space-between">
            <Text>
              Partial Editing Allowed Till:{" "}
              <Badge tone="info">Aug 1 at 06:22 PM GMT+0:4</Badge>
            </Text>
            <Checkbox id="checkbox" name="checkbox">
              Allow Editing
            </Checkbox>
          </InlineStack>
          <BlockStack>
            <InlineStack inlineGap blockAlignment="center">
              {" "}
              <Text>Customer can Edit:</Text>
              <Badge tone="default">Address</Badge>
              <Badge tone="default">Contact</Badge>
              <Badge tone="default">Invoice</Badge>
              <Badge tone="default">Cancellation</Badge>
            </InlineStack>
            <InlineStack>
              <Icon tone="warning" name="AlertMinor" />
              <Text fontWeight="light-200" fontStyle="italic">
                Archived Order cant be Edited
              </Text>
            </InlineStack>
          </BlockStack>
          <Divider />
          <InlineStack inlineGap inlineAlignment="end">
            <Button variant="seondary">Send PDF Invoice</Button>
            <Button variant="primary">Notify customer about order edit</Button>
          </InlineStack>
        </BlockStack>
      </Section>
    </AdminBlock>
  );
}
