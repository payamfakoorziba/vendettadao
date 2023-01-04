import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { firestore } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function NFTSwapForm() {
  const onSubmit = async () => {
    const docRef = await addDoc(collection(firestore, "nftswap"), {
      telegram: telegram,
      network: network,
      sameOrnot: network === "polygon" ? sameorNot : "",
      polygonInputs: network === "polygon" ? polygonInputs : "",
      vechainInputs: network === "vechain" ? vechainInputs : "",
      elysiumAddress : elysiumAddress
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const [telegram, setTelegram] = useState("");
  const [polygonInputs, setPolygonInputs] = useState([""]);
  const [vechainInputs, setVechainInputs] = useState([""]);
  const [elysiumAddress, setElysiumAddress] = useState("");

  const [network, setNetwork] = useState("");
  const [sameorNot, setSameorNot] = useState("");

  // console.log(telegram)
  // console.log(polygonInputs)
  // console.log(vechainInputs)
  console.log(network);
  console.log(sameorNot);

  return (
    <div className="overflow-hidden py-16 px-4 sm:px-2 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-xl text-gray-100">
        {/* Instructions */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            NFT Swap form
          </h2>
          <div className="text-left">
            <p className="mt-2">
              Use this form to swap your VendettaDAO Genesis Series NFTs from
              Polygon or VeChain to the Elysium blockchain.
            </p>
            <ul className="list-disc mt-2">
              <li>
                Genesis Series NFTs on VeChain and Polygon will be deprecated
              </li>
              <li>
                After proving ownership, VendettaDAO will send your new NFTs to
                your specified Elysium address
              </li>
            </ul>
            <p className="mt-2 font-bold">To prove NFT ownership: </p>
            <ol className="list-decimal">
              <li>
                Receive your NFTs on the Elysium address that matches your
                Polygon address (Polygon only)
              </li>
              <p className="fond-bold">or</p>
              <li>
                Send your deprecated NFTs to verify and burn, then specify the
                Elysium address to receive your new NFTs (Polygon or VeChain)
              </li>
            </ol>
          </div>
        </div>
        {/* Form */}
        <form className="mt-8">
          <p className="font-bold">
            What's your Telegram handle? <span className="text-red-600">*</span>
          </p>
          <p>In case we need to contact you.</p>
          <input
            type="text"
            id="telegram"
            value={telegram}
            onChange={(e) => {
              setTelegram(e.target.value);
            }}
            required
            className="block
            w-full
            mt-2
            text-gray-900
            rounded-md
          border-gray-300
            py-3 px-4 shadow-sm
          focus:border-accent-50
          focus:ring-accent-500
          bg-gray-200"
          />
          <p className="mt-6">
            What blockchain currently holds your NFTs?{"  "}
            <span className="text-red-600">*</span>
          </p>

          <input
            name="blockchain"
            type="radio"
            className="peer/polygon"
            id="polygon"
            value="polygon"
            onChange={(e) => {
              setNetwork(e.target.value);
            }}
          />
          <label
            className="ml-2 peer-checked/polygon:text-orange-500"
            htmlFor="polygon"
          >
            Polygon (MATIC)
          </label>
          <input
            name="blockchain"
            type="radio"
            className="ml-7 peer/vechain"
            id="vechain"
            value="vechain"
            onChange={(e) => {
              setNetwork(e.target.value);
              setSameorNot("");
            }}
            required
          />
          <label
            className="ml-2 peer-checked/vechain:text-orange-500"
            htmlFor="vechain"
          >
            VeChain
          </label>

          {/* polygon */}
          {network === "polygon" && (
            <div className="mt-6 text-white">
              <p>
                What Elysium address do you want to use?{" "}
                <span className="text-red-600">*</span>
              </p>
              <div>
                <input
                  name="elysium"
                  type="radio"
                  id="sameElysium"
                  className="peer/sameElysium"
                  value="samePolyon"
                  onChange={(e) => {
                    setSameorNot(e.target.value);
                  }}
                  required
                />
                <label
                  className="ml-2 peer-checked/sameElysium:text-orange-500"
                  htmlFor="sameElysium"
                >
                  Same as my Polygon address
                </label>
                <br />
                <input
                  name="elysium"
                  type="radio"
                  id="notSamePolyon"
                  className="peer/notSameElysium"
                  value="notSameElysium"
                  onChange={(e) => {
                    setSameorNot(e.target.value);
                  }}
                />
                <label
                  className="ml-2 peer-checked/notSameElysium:text-orange-500"
                  htmlFor="notSameElysium"
                >
                  NOT the same as my Polygon address
                </label>

                {/* Same Elysium */}
                {sameorNot === "sameElysium" && (
                  <div className="mt-6">
                    <p>
                      <span className="font-bold">
                        Paste your Elysium address{" "}
                      </span>
                      <span className="text-red-600">*</span>
                      <br />
                      <span>We'll send your NFTs to this address.</span>
                      <input
                        type="text"
                        id="ElysiumAddress"
                        value={elysiumAddress}
                        onChange={(e) => {
                          setElysiumAddress(e.target.value);
                        }}
                        required
                        className="block
                    mt-2
                    w-full
                    rounded-md
                    border-gray-300
                    py-3 px-4 shadow-sm
                    focus:border-accent-50
                    focus:ring-accent-500
                    bg-gray-200
                    text-gray-900"
                      />
                    </p>
                  </div>
                )}

                {/* Not Same Elysium */}
                {sameorNot === "notSameElysium" && (
                  <div className="mt-6">
                    <p>
                      To prove ownership, send the deprecated NFTs to
                      VendettaDAO to verify and burn.
                    </p>
                    <br />
                    <u>Follow these steps:</u>
                    <ol className="list-decimal">
                      <li>
                        Send your NFTs to the following VeChain address:
                        <br />
                        <br />
                        0x???
                        <br />
                        <br />
                      </li>
                      <li>Copy the transaction ID</li>
                      <li>Proceed to the next step</li>
                    </ol>
                    <br />
                    <p>
                      <span className="font-bold">
                        Paste your transaction ID{" "}
                      </span>
                      <span className="text-red-600">*</span>
                      <br />
                      For multiple transactions, press ENTER after each
                      transaction ID
                    </p>
                    {/* TODO: textbox */}
                    {polygonInputs.map((input, index) => {
                      return (
                        <input
                          key={index}
                          value={input}
                          type="text"
                          id="transactionID"
                          required
                          className="block
                          mt-2
                          w-full
                          rounded-md
                          border-gray-300
                          py-3 px-4 shadow-sm
                          focus:border-accent-50
                          focus:ring-accent-500
                          bg-gray-200
                          text-gray-900"
                          onChange={(e) => {
                            const { value } = e.target;
                            const list = [...polygonInputs];
                            list[index] = value;
                            setPolygonInputs(list);
                          }}
                          // add input when enter is pressed
                          onKeyPress={(e) => {
                            if (
                              e.key === "Enter" &&
                              index === polygonInputs.length - 1
                            ) {
                              e.preventDefault();
                              setPolygonInputs([...polygonInputs, ""]);
                            }
                          }}
                        />
                      );
                    })}
                    <br />
                    <p>
                      <span className="font-bold">
                        Paste your Elysium address{" "}
                      </span>
                      <span className="text-red-600">*</span>
                      <br />
                      We'll send your NFTs to this address.
                    </p>
                    <input
                      type="text"
                      id="ElysiumAddress"
                      required
                      value={elysiumAddress}
                      onChange={(e) => {
                        setElysiumAddress(e.target.value);
                      }}
                      className="block
                    mt-2
                    w-full
                    rounded-md
                    border-gray-300
                    py-3 px-4 shadow-sm
                    focus:border-accent-50
                    focus:ring-accent-500
                    bg-gray-200
                    text-gray-900"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* vechain */}
          {network === "vechain" && (
            <div className="mt-2 text-white">
              <p>
                To prove ownership, send the deprecated NFTs to VendettaDAO to
                verify and burn.
              </p>
              <br />
              <u>Follow these steps:</u>
              <ol className="list-decimal">
                <li>
                  Send your NFTs to the following VeChain address:
                  <br />
                  <br />
                  0x???
                  <br />
                  <br />
                </li>
                <li>Copy the transaction ID</li>
                <li>Proceed to the next step</li>
              </ol>
              <br />
              <p>
                <span className="font-bold">Paste your transaction ID </span>
                <span className="text-red-600">*</span>
                <br />
                For multiple transactions, press ENTER after each transaction ID
              </p>
              {vechainInputs.map((input, index) => {
                return (
                  <input
                    key={index}
                    value={input}
                    type="text"
                    id="transactionID"
                    required
                    className="block
                          mt-2
                          w-full
                          rounded-md
                          border-gray-300
                          py-3 px-4 shadow-sm
                          focus:border-accent-50
                          focus:ring-accent-500
                          bg-gray-200
                          text-gray-900"
                    onChange={(e) => {
                      const { value } = e.target;
                      const list = [...vechainInputs];
                      list[index] = value;
                      setVechainInputs(list);
                    }}
                    // add input when enter is pressed
                    onKeyPress={(e) => {
                      if (
                        e.key === "Enter" &&
                        index === vechainInputs.length - 1
                      ) {
                        e.preventDefault();
                        setVechainInputs([...vechainInputs, ""]);
                      }
                    }}
                  />
                );
              })}
              <br />
              <p>
                <span className="font-bold">Paste your Elysium address </span>
                <span className="text-red-600">*</span>
                <br />
                We'll send your NFTs to this address.
              </p>
              <input
                type="text"
                id="ElysiumAddress"
                required
                value={elysiumAddress}
                onChange={(e) => {
                  setElysiumAddress(e.target.value);
                }}
                className="block
                    mt-2
                    w-full
                    rounded-md
                    border-gray-300
                    py-3 px-4 shadow-sm
                    focus:border-accent-50
                    focus:ring-accent-500
                    bg-gray-200
                    text-gray-900"
              />
            </div>
          )}

          <div>
            <button
              type="button"
              className="mt-4
              justify-center
              py-2 px-4
              border border-transparent
              shadow-sm
              inline-flex
              font-medium
              rounded-md
              text-white
              bg-accent-500
              hover:bg-accent-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-accent-500
              text-sm"
              onClick={onSubmit}
            >
              Submit
            </button>
            {/* <button
              type="reset"
              className="mt-4
              ml-4
              justify-center
              py-2 px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-accent-500
              hover:bg-accent-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-accent-500
              inline-flex"
              onClick={(e) => {
                e.preventDefault();
                setTelegram("");
                setPolygonInputs([""]);
                setVechainInputs([""]);
                setElysiumAddress("");
                setNetwork("");
                setSameorNot("");
              }}
            >
              Reset
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

// TODO: fix the required fields
// TODO: add textbox
// TODO: fix the styling
// TODO: fix the overflow issue
// TODO: connect to server
