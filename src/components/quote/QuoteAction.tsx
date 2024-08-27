import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import Container from "../ui/Container";
import Select from "../ui/Select";

interface QuoteActionProps {
  version: string;
  category: string;
  onVersionChange: (version: string) => void;
  onCategoryChange: (category: string) => void;
}

function QuoteAction(props: QuoteActionProps) {
  async function fetchQuoteCategories() {
    const response = await axiosInstance.get("/api/categories");
    return response.data;
  }

  const { data } = useQuery({
    queryKey: ["quoteCategories"],
    queryFn: fetchQuoteCategories,
  });

  function categorySelectChangeHandler(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    props.onCategoryChange(event.target.value);
  }

  function versionSelectChangeHandler(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    props.onVersionChange(event.target.value);
  }

  return (
    <Container className="flex px-0 gap-3">
      <Select
        name="category"
        value={props.category}
        onChange={categorySelectChangeHandler}
      >
        <option value="" hidden>
          What are you feeling today?
        </option>
        {data &&
          data.map((category: string) => (
            <option key={category} value={category}>
              {category.substring(0, 1).toUpperCase()}
              {category.substring(1, category.length).toLowerCase()}
            </option>
          ))}
      </Select>

      <Select
        name="version"
        value={props.version}
        onChange={versionSelectChangeHandler}
      >
        <option value="" hidden>
          Version
        </option>
        <option value="alkitab-terjemahan-baru">Alkitab Terjemahan Baru</option>
        <option value="king-james-version">King James Version</option>
        <option value="new-international-version">
          New International Version
        </option>
      </Select>
    </Container>
  );
}

export default QuoteAction;
