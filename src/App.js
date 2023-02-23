import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar__container">
      <input type="text" placeholder="Search..." />
      <div className="search-bar__in_stock_checkbox">
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

function ProductCategoryRow({ name }) {
  return (
    <tr>
      <td colSpan="2">
        <strong>{name}</strong>
      </td>
    </tr>
  );
}

function ProductRow({ name, price }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

function ProductTable() {
  return (
    <div className="product-table__container">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <ProductCategoryRow name="Sporting Goods" />
        <ProductRow name="Football" price="$49.99" />
        <ProductRow name="Baseball" price="$9.99" />
        <ProductRow name="Baseketball" price="$49.99" />
        <ProductCategoryRow name="Electroincs" />
        <ProductRow name="Ipod Touch" price="$99.99" />
        <ProductRow name="iPhone 5" price="$399.99" />
        <ProductRow name="Nexus 7" price="$199.99" />
      </table>
    </div>
  );
}

function FilterableProductTable() {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable />
    </div>
  );
}
const someNews = [
  {
    title: "CNN Acuire BEME",
    date: "March 20 2022",
    content: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/random/300x200/?cats",
    category: "News",
    link: "#",
  },
  {
    title: "React and the WP-API",
    date: "March 19 2022",
    content: "The first ever decoupled starter theme for React & the WP-API.",
    image: "https://source.unsplash.com/random/300x200/?cat",
    category: "News",
    link: "#",
  },
  {
    title: "Nomad Lifestyle",
    date: "March 19 2022",
    content: "Learn our tips and tricks on living a nomadic lifestyle.",
    image: "https://source.unsplash.com/random/300x200/?catz",
    category: "Travel",
    link: "#",
  },
];

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

function CardBody({ date, title, content, link }) {
  return (
    <div className="card-body__container">
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function CardHeader({ category, image }) {
  return (
    <div className="card-header__container">
      <h2>{category}</h2>
      <img src={image} alt="img" />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <div className="card__container">
      <CardHeader category={category} image={image} />
      <CardBody date={date} title={title} content={content} link={link} />
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="header__container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function News() {
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((news) => <Card {...news} key={news.title} />)}
    </div>
  );
}
export default News;
