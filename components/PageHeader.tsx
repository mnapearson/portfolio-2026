import TopNav from "./TopNav";

type NavLabels = { products: string; productions: string };

type Props = {
  title: string;
  navLabels: NavLabels;
};

export default function PageHeader({ title, navLabels }: Props) {
  return (
    <header className="page-header">
      <h1 className="page-title">{title}</h1>
      <TopNav labels={navLabels} />
    </header>
  );
}
