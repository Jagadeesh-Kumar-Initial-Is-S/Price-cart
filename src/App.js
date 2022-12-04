import PriceCard from "./pcard";
import "./App.css";


function App() {
  const pricingData = [
    {
      packageName: "FREE",
      price: "$0",
      period: "month",
      features: [
        {
          name: "Single User",
          isEnabled: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PLUS",
      price: "$9",
      period: "month",
      features: [
        {
          name: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "50GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PRO",
      price: "$49",
      period: "month",
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "150GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
          isunlimited: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];
  return (

        <div>
          <a href = 'https://github.com/Jagadeesh-Kumar-Initial-Is-S' target = '_blank' >Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</a>
    
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {pricingData.map((obj, index) => {
            return <PriceCard key={`C${index}`} Data={obj} />;
          })}


        </div>
      </div>
    </section>
    </div>


  );
}


export default App;
