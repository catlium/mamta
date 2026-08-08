import { useState, type SetStateAction } from "react"
import QRCode from "react-qr-code"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

// ===============================
// CONFIGURATION
// ===============================
const UPI_ID = "pushpakamble953@okicici"
const NGO_NAME = "Mamta Samajeek Sansta"

const predefinedAmounts = ["99", "249", "499", "999", "1999"]

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)

  // ===============================
  // UPI DEEP LINK
  // ===============================
  const upiLink =
    selectedAmount && Number(selectedAmount) > 0
      ? `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(
          NGO_NAME
        )}&am=${encodeURIComponent(
          selectedAmount
        )}&cu=INR&tn=${encodeURIComponent("Donation")}`
      : ""

  // ===============================
  // AMOUNT SELECTION
  // ===============================
  const handleAmountChange = (value: SetStateAction<string>) => {
    setSelectedAmount(value)
    setIsCustom(false)
  }

  const handleCustomAmount = () => {
    setIsCustom(true)
    setSelectedAmount("")
  }

  // ===============================
  // DONATE
  // ===============================
  const handleDonate = () => {
    const amount = Number(selectedAmount)

    if (!amount || amount <= 0) {
      return
    }

    toast("Redirecting to UPI app...")

    window.open(upiLink, "_blank")
  }

  const isValidAmount = selectedAmount !== "" && Number(selectedAmount) > 0

  return (
    <>
      <Toaster />

      <section className="min-h-screen bg-gray-50 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="mb-10 text-center">
            <p className="font-semibold tracking-wide text-orange-500 uppercase">
              Support Our Mission
            </p>

            <h1 className="mt-2 text-4xl font-bold text-blue-900 md:text-5xl">
              Make a Difference Today
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Your contribution helps us create better opportunities, restore
              dignity, and transform communities.
            </p>
          </div>

          <Card className="rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-1000 text-2xl font-bold">
                Choose Donation Amount
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Amount Selection */}
              <RadioGroup
                value={isCustom ? "custom" : selectedAmount}
                onValueChange={(value) => {
                  if (value === "custom") {
                    handleCustomAmount()
                  } else {
                    handleAmountChange(value)
                  }
                }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3"
              >
                {predefinedAmounts.map((amount) => (
                  <div key={amount}>
                    <RadioGroupItem
                      value={amount}
                      id={`amount-${amount}`}
                      className="peer sr-only"
                    />

                    <Label
                      htmlFor={`amount-${amount}`}
                      className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-4 py-5 text-lg font-semibold text-gray-800 transition peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 peer-data-[state=checked]:text-orange-600 hover:border-orange-400"
                    >
                      ₹{amount}
                    </Label>
                  </div>
                ))}

                {/* Custom Amount */}
                <div>
                  <RadioGroupItem
                    value="custom"
                    id="amount-custom"
                    className="peer sr-only"
                  />

                  <Label
                    htmlFor="amount-custom"
                    className="flex h-full cursor-pointer items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-4 py-5 text-lg font-semibold text-gray-800 transition peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 peer-data-[state=checked]:text-orange-600 hover:border-orange-400"
                  >
                    Custom Amount
                  </Label>
                </div>
              </RadioGroup>

              {/* Custom Input */}
              {isCustom && (
                <div className="space-y-2">
                  <Label htmlFor="custom-amount" className="text-gray-800">
                    Enter Custom Amount
                  </Label>

                  <div className="relative">
                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500">
                      ₹
                    </span>

                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                      className="pl-9 text-gray-800"
                    />
                  </div>
                </div>
              )}

              {/* Selected Amount */}
              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="text-sm text-gray-500">Donation Amount</p>

                <p className="mt-1 text-3xl font-bold text-blue-900">
                  {isValidAmount ? `₹${selectedAmount}` : "₹0"}
                </p>
              </div>
              
              {/* QR Code */}
              {isValidAmount && (
                <div className="flex flex-col items-center border-t pt-8">
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <QRCode
                      value={upiLink}
                      size={220}
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                    />
                  </div>

                  <p className="mt-5 text-center font-medium text-gray-700">
                    Scan to pay with any UPI app
                  </p>

                  <p className="mt-2 text-center text-sm text-gray-500">
                    UPI ID: {UPI_ID}
                  </p>
                </div>
              )}

              {/* Donate Button */}
              <Button
                type="button"
                disabled={!isValidAmount}
                onClick={handleDonate}
                className="h-14 w-full rounded-full bg-orange-500 text-lg font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Donate Now
              </Button>
            </CardContent>
          </Card>

          {/* Security / Thank You */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Every contribution makes a meaningful difference. Thank you for
            supporting our mission.
          </p>
        </div>
      </section>
    </>
  )
}

export default DonatePage
