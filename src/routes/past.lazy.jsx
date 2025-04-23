import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPastOrders";
import getPastOrder from "../api/getPastOrder";
import Modal from "../Modal";
import { priceConverter } from "../useCurrency";
import Spinner from "../Spinner";

export const Route = createLazyFileRoute("/past")({
  component: PastOrdersRoute,
});

function PastOrdersRoute() {
  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState(null);
  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });

  const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 8640000, // one day in milliseconds
    enabled: !!focusedOrder, // avoids truthy or falsy values and enforces strictly a boolean value
  });

  if (isLoading) {
    return (
      <div className="past-orders">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="past-orders font-inter">
      <table className="w-full md:w-4/5 lg:w-3/5 2xl:w-1/2 md:mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr
              key={order.order_id}
              className="even:bg-[#ff9c9c] h-8 2xl:h-11 text-center"
            >
              <td>
                <button
                  className="border-2 border-primary rounded-lg py-1 px-2 md:px-4"
                  onClick={() => setFocusedOrder(order.order_id)}
                >
                  {order.order_id}
                </button>
              </td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages flex justify-evenly 2xl:justify-center 2xl:space-x-32 mt-6 items-center">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="border-2 border-primary rounded-lg px-4 py-2 w-24"
        >
          Previous
        </button>
        <div className=" text-2xl">{page}</div>
        <button
          disabled={data.length < 10}
          onClick={() => setPage(page + 1)}
          className="border-2 border-primary rounded-lg px-4 py-2 w-24"
        >
          Next
        </button>
      </div>
      {/* If there is a  focusedOrder render the modal else render nothing (that's what the null represents) */}
      {focusedOrder ? (
        <Modal>
          <h2>Order #{focusedOrder}</h2>
          {!isLoadingPastOrder ? (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {pastOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{priceConverter(pizza.price)}</td>
                    <td>{priceConverter(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3> Loading...</h3>
          )}
          <button onClick={() => setFocusedOrder()}>Close</button>
        </Modal>
      ) : null}
    </div>
  );
}
