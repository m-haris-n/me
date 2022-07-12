export default function Wrapper(props) {
  const styles = props.classes;
  return <div className={`wrapper ${styles }`}>{props.children}</div>;
}
