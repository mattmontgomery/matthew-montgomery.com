import photo from "~/images/photo.jpg";
import Page from "~/components/Page";
import { LeadImage } from "~/components/LeadImage";

export default function Index() {
  return (
    <Page
      renderLeadImage={() => (
        <LeadImage
          image={{ alt: "Cactus in the Arizona desert", url: photo }}
          title="Matt Montgomery"
          subtitle="Software Engineer | Writer | Photographer"
          backgroundFilter="bg-slate-700/75"
        />
      )}
    ></Page>
  );
}
