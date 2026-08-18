import { useState } from "react"
import QRCode from "react-qr-code"
import { Heart, ShieldCheck } from "lucide-react"

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

function Donate() {
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

  const handleAmountChange = (value: string) => {
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

      <section id="donate" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Support Our Mission
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Support Can{" "}
            <span className="text-primary">Create Change.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Every contribution helps us create opportunities, support vulnerable
            communities, and work towards a more inclusive and dignified future.
          </p>
        </div>

        {/* Donation Layout */}
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div className="pt-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Help us continue the work.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Your donation can help support education, healthcare, women
              empowerment, livelihood opportunities, humanitarian assistance,
              and other community initiatives.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary-foreground">
                  <Heart className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-medium">Every contribution matters</p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Donations of any size can contribute towards meaningful
                    community initiatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-medium">Direct UPI payment</p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Choose an amount and pay directly using your preferred UPI
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Choose Donation Amount</CardTitle>

              <p className="text-sm text-muted-foreground">
                Select an amount or enter your own contribution.
              </p>
            </CardHeader>

            <CardContent className="space-y-7">
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
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
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
                      className="flex cursor-pointer items-center justify-center rounded-xl border px-4 py-5 text-lg font-semibold transition-none peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary hover:bg-muted"
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
                    className="flex h-full cursor-pointer items-center justify-center rounded-xl border px-4 py-5 text-center text-sm font-semibold transition-none peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10 peer-data-[state=checked]:text-secondary-foreground hover:bg-muted"
                  >
                    Custom Amount
                  </Label>
                </div>
              </RadioGroup>

              {/* Custom Amount Input */}
              {isCustom && (
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Enter Custom Amount</Label>

                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
                      ₹
                    </span>

                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={selectedAmount}
                      onChange={(event) =>
                        setSelectedAmount(event.target.value)
                      }
                      className="pl-8"
                    />
                  </div>
                </div>
              )}

              {/* Selected Amount */}
              <div className="rounded-xl border bg-muted/40 px-5 py-4 text-center">
                <p className="text-sm text-muted-foreground">Donation Amount</p>

                <p className="mt-1 text-3xl font-bold tracking-tight">
                  {isValidAmount ? `₹${selectedAmount}` : "₹0"}
                </p>
              </div>

              {/* QR */}
              {isValidAmount && (
                <div className="border-t pt-7">
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border bg-white p-4">
                      <QRCode
                        value={upiLink}
                        size={210}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    </div>

                    <p className="mt-5 font-medium">
                      Scan to pay with any UPI app
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      UPI ID: {UPI_ID}
                    </p>
                  </div>
                </div>
              )}

              {/* Donate */}
              <Button
                type="button"
                size="lg"
                disabled={!isValidAmount}
                onClick={handleDonate}
                className="h-12 w-full rounded-full"
              >
                <Heart />
                Donate ₹{isValidAmount ? selectedAmount : ""}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
          Thank you for standing with communities and supporting the work of
          Mamta Samajeek Sansta.
        </p>
      </section>
    </>
  )
}

export default Donate
