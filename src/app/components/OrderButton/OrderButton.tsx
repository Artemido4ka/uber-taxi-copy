import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import Button from "../ui/Button";
import { optionsList } from "@/app/static/data";

const OrderButton = () => {
  const { travelTime, selectedOption } = useTypedSelector(
    (state) => state.uber
  );

  const orderHandler = () => {
    alert(
      `Thanks for the order ! Your order is: ${
        optionsList.find((o) => o._id === selectedOption)?.title
      }.`
    );
  };

  return (
    <Button
      title="Order"
      bgColor="##ffe847"
      color="#111"
      cb={orderHandler}
      isDisabled={!travelTime && !selectedOption}
    />
  );
};

export default OrderButton;
