import "./globals.css";

type MainLayoutprop={
  children:React.ReactNode;
}
const MainLayout:React.FC<MainLayoutprop> = (props) => {
  console.log(props,"props");
  return(
    <html lang="en">
      <body>
        {props.children}
      </body>
    </html>
  )
}
  export default MainLayout;