import { useAppDispatch, useAppSelectior } from "../../redux/hooks";
import { clearitems } from "../../redux/slices/recentSearchesSlice";
import { Button } from "../Buttons/style";
import { Preview, PreviewItem } from "../Preview";
import SearchPlaceholder from "./SearchPlaceholder";

const RecentSearches = () => {
  const items = useAppSelectior((state) => state.recentSearches.items);
  const dispatch = useAppDispatch();

  return items.length > 0 ? (
    <Preview
      style={{ padding: 0, position: "relative" }}
      title="Recent searches"
    >
      {items.map(({ id, image, title, type, subText, round }) => (
        <PreviewItem
          key={id}
          id={id}
          image={image}
          title={title}
          subText={subText}
          type={type}
          round={round}
          showClear
        />
      ))}
      <Button
        onClick={() => dispatch(clearitems())}
        style={{ position: "absolute", top: "-20px", right: "10px" }}
      >
        Clear recent
      </Button>
    </Preview>
  ) : (
    <SearchPlaceholder />
  );
};

export default RecentSearches;
