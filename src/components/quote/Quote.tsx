import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TOTAL_VERSE } from "../../constants";
import { BibleQuote } from "../../types";
import { ButtonVariant, LoadingSize, LoadingVariant } from "../../types/enums";
import axiosInstance from "../../utils/axiosInstance";
import { kebabToTitleCase } from "../../utils/caseConverter";
import randomNumber from "../../utils/randomNumber";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Loading from "../ui/Loading";

interface QuoteProps {
  version: string;
  category: string;
}

function Quote(props: QuoteProps) {
  const [randomId, setRandomId] = useState(randomNumber(1, TOTAL_VERSE));
  const [buttonClicked, setButtonClicked] = useState(false);
  const queryClient = useQueryClient();

  async function getQuote(id: number, category: string) {
    const url = "/api/quotes";
    const currentData = queryClient.getQueryData<BibleQuote>([
      "quotes",
      randomId,
      category,
    ]);

    if (category) {
      const response = await axiosInstance.get(`${url}?category=${category}`);
      let result = response.data[randomNumber(0, response.data.length - 1)];
      while (result.id === currentData?.id) {
        result = response.data[randomNumber(0, response.data.length - 1)];
      }
      return result;
    } else {
      const response = await axiosInstance.get(`${url}?id=${id}`);
      return response.data[0];
    }
  }

  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: ["quotes", randomId, props.category],
    queryFn: () => getQuote(randomId, props.category),
    enabled: buttonClicked,
    staleTime: 60000,
  });

  function generateQuoteHandler() {
    if (!buttonClicked) {
      setButtonClicked(true);
    }

    if (!props.category) {
      let newId = randomId;
      while (newId === randomId) {
        newId = randomNumber(1, TOTAL_VERSE);
      }
      setRandomId(newId);
    } else {
      refetch();
    }
  }

  return (
    <Container className="bg-gray-9 text-gray-0 flex flex-col justify-center items-center gap-6 rounded-xl py-8">
      <div
        className={`${
          buttonClicked ? "min-h-40" : ""
        } text-center relative px-36`}
      >
        {isLoading && (
          <Loading
            size={LoadingSize.L}
            variant={LoadingVariant.LIGHT}
            className="absolute top-0 left-0"
          />
        )}

        {!isLoading && isError && <p>{error.message}</p>}

        {!isLoading && !isError && !data && (
          <p>Feeling lost? Need some inspiration? Try These</p>
        )}

        {!isLoading && !isError && data && (
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">
              {data.title[props.version]} {data.verse}:{data.chapter}
            </h2>
            <p className="mb-5 min-h-20">{data.content[props.version]}</p>
            <p className="self-end">
              &mdash; {kebabToTitleCase(props.version)}
            </p>
          </div>
        )}
      </div>
      <Button variant={ButtonVariant.LIGHT} onClick={generateQuoteHandler}>
        Generate Random Inspiring Verse
      </Button>
    </Container>
  );
}

export default Quote;
