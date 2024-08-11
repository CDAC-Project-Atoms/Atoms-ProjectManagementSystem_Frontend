import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSubscription, upgradeSubscription } from "@/redux/Subscription/Action";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location=useLocation();
  const {subscription}=useSelector(store=>store)

  const queryParams = new URLSearchParams(location.search);

  // Access the 'payment_id' and 'planType' parameters
  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  console.log("Payment ID:", paymentId);
  console.log("Plan Type:", planType);

  useEffect(() => {
    dispatch(upgradeSubscription({planType}))
    dispatch(getUserSubscription())
  }, []);

  return (
    <div className="flex justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircledIcon className="h-9 w-9 text-green-500" />
          <p className="text-xl">Plan Upgraded Successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">start date: {subscription.userSubscription?.subscriptionStartDate}</p>
          <p className="text-red-500">end date : {subscription.userSubscription?.subscriptionEndDate}</p>
          <p>plan type : {subscription.userSubscription?.planType}</p>
        </div>
        <Button onClick={() => navigate("/")}>Go To Home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
