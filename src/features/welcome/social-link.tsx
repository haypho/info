import { motion } from "framer-motion";
import {
  ASSET_PDF_RESUME,
  PERSONAL_EMAIL_URL,
  PERSONAL_GITHUB_URL,
  PERSONAL_LINKEDIN_URL,
} from "@/constants";
import Link from "next/link";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SOCIAL_LINK_ITEMS = [
  {
    icon: faEnvelope,
    url: PERSONAL_EMAIL_URL,
  },
  {
    icon: faGithub,
    url: PERSONAL_GITHUB_URL,
  },
  {
    icon: faLinkedin,
    url: PERSONAL_LINKEDIN_URL,
  },
  {
    icon: faFilePdf,
    url: ASSET_PDF_RESUME,
  },
];

export const SocialLinks = () => {
  return (
    <motion.div
      className="text-white flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {SOCIAL_LINK_ITEMS.map(({ icon, url }) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          passHref
          className="w-6 h-6 hover:w-7 hover:h-7 my-5 mx-4 hover:my-4 hover:mx-3.5 hover:brightness-75"
        >
          <FontAwesomeIcon icon={icon} className="w-full h-full" />
        </Link>
      ))}
    </motion.div>
  );
};
