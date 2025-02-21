import { topics } from "@/constants";

const TopicLinks = () => {
  return (
    <ul className="space-y-2 pt-4">
      {topics.map((topic, index) => (
        <li
          key={index}
          className="sm:text-5xl text-3xl font-bold font-poly cursor-pointer"
        >
          {topic.topic}
        </li>
      ))}
    </ul>
  );
};

export default TopicLinks;
