import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPastOrders";
import getPastOrder from "../api/getPastOrder";
import Modal from "../Modal";
import { priceConverter } from "../useCurrency";
import Spinner from "../Spinner";
import ErrorBoundary from "../ErrorBoundary";

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryWrappedPastOrdersRoutes,
});

function PastOrdersRoute() {
  // How to test the ErrorBoundary
  //throw new Error("Big huge Error");
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
      <table className="w-full md:w-4/5 lg:w-3/5 2xl:w-1/2 md:mx-auto border-x-2 border-[#b31a1a]">
        <thead className="bg-[#b31a1a] h-8">
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
              className="even:bg-[#fff1f1] h-8 2xl:h-11 text-center"
            >
              <td>
                <button
                  className="</div>border-2 border-primary rounded-lg py-1 px-2 md:px-4"
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
          <h2 className="text-2xl text-center font-semibold mb-4 font-inter">
            Order #{focusedOrder}
          </h2>
          {!isLoadingPastOrder ? (
            <table className="border-separate border-spacing-x-1 w-fit md:border-spacing-x-4 md:-ml-4 border-spacing-y-2 -ml-1 mb-4">
              <thead className=" text-center md:text-left">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>
                    <span className="block sm:hidden">Qty</span>{" "}
                    <span className="hidden sm:block">Quantity</span>
                  </th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {pastOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="w-20 md:w-28">{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{priceConverter(pizza.price)}</td>
                    <td>{priceConverter(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Spinner />
          )}
          <div className="flex justify-center">
            <button
              className="border-2 border-primary px-3 py-1 rounded-lg"
              onClick={() => setFocusedOrder()}
            >
              Close
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

function ErrorBoundaryWrappedPastOrdersRoutes() {
  return (
    <ErrorBoundary>
      <PastOrdersRoute />
    </ErrorBoundary>
  );
}
