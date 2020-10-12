import Link from 'next/link';

export default function CustomLink(props) {
  const { children, className, ...rest } = props;
  return (
    <Link {...rest} parseHref>
      <a className={className}>{children}</a>
    </Link>
  );
}