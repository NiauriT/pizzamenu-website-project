import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "პური, იტალიური ზეითუნის ზეთით და როზმარით.",
    price: 6 + "ლ",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "პამიდორი და მოცარელას უგემრიელესი ყველი.",
    price: 10 + "ლ",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "პამიდორი, მოცარელა, ისპანახი, რიკოტას ყველი",
    price: 12 + "ლ",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "პამიდორი, მოცარელა, სოკო და ხახვი.",
    price: 12 + "ლ",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "პამიდორი, მოცარელა, პეპერონი",
    price: 15 + "ლ",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "პამიდორი, მოცარელა, ქათმის ხორცი, არაგულა და სულგუნი",
    price: 18 + "ლ",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "green",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Tokos Italiano Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>ჩვენი მენიუ</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            ავთენტური იტალიური სამზარეულო. რამდენიმე განსხვავებული არჩევანი,
            პირდაპირ ჩვენი ცხელი რუმელიდან, ყველაფერი ორგანული და გემრიელი.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="Pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject);

  //if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          ჩვენ მოხარულები ვართ მიგიღოთ {openHour}:00-დან {closeHour}
          :00-მდე.
        </p>
      )}
    </footer>
  );

  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        ჩვენი მაღაზია ღიაა {openHour}:00 დან {closeHour}:00-მდე. მობრძანდით ან
        შეუკვეთეთ ონლაინ.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
