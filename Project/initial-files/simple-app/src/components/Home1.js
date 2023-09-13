import { useTranslation } from "react-i18next";

const Home1 = () => {
    const [t,i18n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

    return (
      <div>
        <p>
          {t("home1.body")}
        </p>

        <ul>
          <li><a href="#" onClick={() => {handleChangeLanguage("en")}}>English</a></li>
          <li><a href="#" onClick={() => {handleChangeLanguage("pl")}}>Polish</a></li>
        </ul>
      </div>
    );
  };

  export default Home1;