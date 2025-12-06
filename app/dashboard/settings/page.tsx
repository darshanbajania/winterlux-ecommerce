"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { useAuth } from "@/context/AuthContext"

export default function SettingsPage() {
    const { user } = useAuth()

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            <div className="space-y-6">
                <Card className="p-6 bg-white border-none shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                                <Input id="name" defaultValue={user?.name || "John Doe"} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">Email</label>
                                <Input id="email" type="email" defaultValue={user?.email || "john@example.com"} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="bio">Bio</label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Tell us a little about yourself"
                                defaultValue="Winter enthusiast and fashion lover."
                            />
                        </div>
                        <div className="pt-2">
                            <Button>Save Changes</Button>
                        </div>
                    </form>
                </Card>

                <Card className="p-6 bg-white border-none shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Order Updates</h3>
                                <p className="text-sm text-slate-500">Receive emails about your order status.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Promotional Emails</h3>
                                <p className="text-sm text-slate-500">Receive emails about new products and sales.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
