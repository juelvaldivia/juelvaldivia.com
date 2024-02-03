type IFooterCopyrightProps = {
  siteName: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <footer className="mx-auto max-w-screen-lg px-3 py-6">
    <section className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} by {props.siteName}.
      </div>
    </section>
  </footer>
);

export { FooterCopyright };
