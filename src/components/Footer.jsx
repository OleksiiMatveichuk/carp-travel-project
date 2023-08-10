const Footer = () => {
  return (
    <footer
      id="contacts"
      className="px-5 py-14 h-[856px] bg-contact-us bg-no-repeat bg-center bg-cover"
    >
      <div>
        <h2>
          Contact <span>us</span>
        </h2>
        <div>
          <h3>Phone number</h3>
          <ul>
            <li>
              <a
                href="tel:+38 (098) 12 34 567"
                target="blank"
                rel="noopener noreferrer"
              >
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a
                href="tel:+38 (073) 12 34 567"
                target="blank"
                rel="noopener noreferrer"
              >
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>E-mail</h3>
          <a
            href="mailto:support@carptravel.com"
            target="blank"
            rel="noopener noreferrer"
          >
            support@carptravel.com
          </a>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul>
            <li>
              <a
                href="https://uk-ua.facebook.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                tiktok
              </a>
            </li>
          </ul>
        </div>
        <form className="flex flex-col gap-6">
          <label>
            Full name
            <input
              className="bg-input h-6 w-full px-2 outline-none"
              type="text"
              name="name"
              placeholder="John Smith"
              required
            />
          </label>
          <label>
            E-mail
            <input
              className="bg-input h-6 w-full px-2 outline-none"
              type="email"
              name="email"
              placeholder="johnsmith@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              className="bg-input h-48 w-full resize-none p-2 outline-none"
              name="comment"
              rows="5"
            ></textarea>
          </label>
          <button type="submit">send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
