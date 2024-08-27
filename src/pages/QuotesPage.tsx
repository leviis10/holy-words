import { Component, ReactNode } from "react";
import Quote from "../components/quote/Quote";
import QuoteAction from "../components/quote/QuoteAction";
import Container from "../components/ui/Container";

interface QuotesPageState {
  category: string;
  version: string;
}

class QuotesPage extends Component<unknown, QuotesPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      category: "",
      version: "alkitab-terjemahan-baru",
    };
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    this.changeVersionHandler = this.changeVersionHandler.bind(this);
  }

  changeVersionHandler(version: string) {
    this.setState({ version });
  }

  changeCategoryHandler(category: string) {
    this.setState({ category });
  }

  render(): ReactNode {
    return (
      <Container className="w-3/4 flex flex-col gap-5 mt-9">
        <QuoteAction
          category={this.state.category}
          version={this.state.version}
          onVersionChange={this.changeVersionHandler}
          onCategoryChange={this.changeCategoryHandler}
        />
        <Quote version={this.state.version} category={this.state.category} />
      </Container>
    );
  }
}

export default QuotesPage;
