import { socials } from "@/constants";

const SocialLinks = () => {
  return (
    <div className="flex-c gap-8 border-y-1 border-primary-black py-4 border-dotted">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.imgUrl}
            alt={social.name}
            className="sm:w-8 sm:h-8 w-6 h-6"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
