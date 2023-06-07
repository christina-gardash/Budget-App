import { useState } from "react";
import Header from "./assets/Components/Header";
import Sections from "./assets/Components/Sections";
import Footer from "./assets/Components/Footer";

function App() {
  const [balance, setBalance] = useState(0);
  const [TrArray, setTrArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let a = Number(e.target.receivedMoney.value);
    let b = e.target.incomeSource.value;

    setBalance((i) => i + a);
    e.target.receivedMoney.value = "";
    e.target.incomeSource.value = "";

    const newObject = {
      amount: a,
      source: b,
      type: "income",
    };
    setTrArray((i) => [...i, newObject]);
  };

  const payHandler = (e) => {
    e.preventDefault();

    let a = Number(e.target.spentMoney.value);
    let b = e.target.expensesSource.value;

    setBalance((i) => i - a);
    e.target.spentMoney.value = "";
    e.target.expensesSource.value = "";

    const newObject = {
      amount: a,
      source: b,
      type: "expenses",
    };
    setTrArray((i) => [...i, newObject]);
  };



  return (
    <div className="App">

      <Header/>

      <Sections/>

      <main className="mainDiv">


        <article className="incomeSection">

          <form action="" onSubmit={submitHandler}>
            <input
              name="receivedMoney"
              type="number"
              placeholder="Amount"
            />

            <input
              name="incomeSource"
              type="text"
              id=""
              placeholder="Description"
            />

            <button type="submit">Receive</button>
          </form>
        </article>


        <article className="balanceSection">

          <h2>${balance}</h2>

            {TrArray.map((i) => (
              <div>
                <p
                  className={
                    i.type == "income" ? "incomeStyle" : "expensesStyle"
                  }
                >
                  amount: ${i.amount} 
                </p>{" "}

                <p>source: {i.source}</p>
              </div>
            ))}
        </article>


        <article className="expensesSection">

          <form action="" onSubmit={payHandler}>
            <input 
              name="spentMoney"
              type="number"
              placeholder="Amount"
            />

            <input
              name="expensesSource"
              type="text"
              id=""
              placeholder="Description"
            />

            <button type="submit">Pay</button>
          </form>
        </article>


      </main>

      <Footer />
    </div>
  );
}

export default App;
