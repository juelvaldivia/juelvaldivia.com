type IFooterCopyrightProps = {
  siteName: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-gray-200">
      © Copyright {new Date().getFullYear()} by {props.siteName}.
    </div>
  </div>
);

export { FooterCopyright };
