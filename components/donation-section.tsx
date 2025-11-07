"use client"

import { Copy, Heart, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function DonationSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const bankDetails = {
    bank: "Zenith Bank",
    accountNumber: "1216594040",
    accountName: "Eminent Gents International Club"
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your generous contribution helps us empower our community and create lasting impact. 
            Every donation makes a difference.
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground px-6 py-4">
            <h3 className="text-lg font-semibold">Bank Transfer Details</h3>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Bank Name */}
            <div className="group">
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Bank Name
              </label>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                <span className="text-foreground font-semibold text-lg">
                  {bankDetails.bank}
                </span>
                <button
                  onClick={() => copyToClipboard(bankDetails.bank, "bank")}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  title="Copy bank name"
                >
                  {copiedField === "bank" ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Number */}
            <div className="group">
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Account Number
              </label>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                <span className="text-foreground font-bold text-xl tracking-wide">
                  {bankDetails.accountNumber}
                </span>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "account")}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  title="Copy account number"
                >
                  {copiedField === "account" ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Name */}
            <div className="group">
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Account Name
              </label>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                <span className="text-foreground font-semibold text-lg">
                  {bankDetails.accountName}
                </span>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountName, "name")}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  title="Copy account name"
                >
                  {copiedField === "name" ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> After making your donation, please send us a confirmation message 
                with your transaction details so we can acknowledge your generous contribution.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "Together, we build a stronger community and create opportunities for growth and empowerment."
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Thank you for your support! 🙏
          </p>
        </div>
      </div>
    </section>
  )
}