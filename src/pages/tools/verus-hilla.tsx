import { VerusHillaTimer } from '~/components/verus-hilla/VerusHillaTimer';
import { ToolsLayout } from '~/layouts/ToolsLayout';

export default function VerusHillaPage() {
  return (
    <>
      <VerusHillaTimer />
    </>
  );
}

VerusHillaPage.layout = ToolsLayout;
