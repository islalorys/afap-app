'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LockIcon, MailIcon, UserIcon } from 'lucide-react'

export default function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Here you would typically make an API call to your authentication endpoint
      // For demonstration, we'll use a timeout to simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Simulating a successful login
      if (email === 'user@example.com' && password === 'password') {
        // Redirect to dashboard or home page after successful login
        router.push('/dashboard')
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>Please sign in to your account</CardDescription>
      </CardHeader>
      <div className="flex justify-center -mt-4 -mb-4">
        <Avatar className="w-24 h-24 border-4 border-background">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
          <AvatarFallback>
            <UserIcon className="w-12 h-12 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
      </div>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <MailIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18} />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18} />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required />
            </div>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="#" className="text-sm text-muted-foreground hover:underline">Create account</a>
        <a href="#" className="text-sm text-muted-foreground hover:underline">Forgot password?</a>
      </CardFooter>
    </Card>)
  );
}