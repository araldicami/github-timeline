import { TimelineItem } from "../TimelineItem";
import { FlagYear, TimelineContainer } from "./styles";

export const Timeline = ({ list }) => {
  return (
    <TimelineContainer>
      {list &&
        list.map((content, index) => (
          <>
            <FlagYear>
              <p>⭐ {content.year} ⭐</p>
            </FlagYear>

            {content.items &&
              content.items.map((item, idx) => (
                <TimelineItem
                  sum={idx + index}
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  createdAt={item.created_at}
                />
              ))}
          </>
        ))}
    </TimelineContainer>
  );
};
