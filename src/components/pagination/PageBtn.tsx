interface Props {
  onClick: () => void;
  disabled?: boolean;
  className: string;
  children: React.ReactNode;
}

const PageBtn = ({ onClick, disabled, className, children }: Props) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default PageBtn;
