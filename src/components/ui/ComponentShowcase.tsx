/**
 * UI Components Showcase
 *
 * Demonstrates all base UI components with various states and variants.
 * Use this page to test components in isolation and verify theme support.
 */

'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSkeleton,
  Checkbox,
  ImageSkeleton,
  Input,
  ListSkeleton,
  LoadingSpinner,
  Radio,
  RadioGroup,
  Select,
  TextSkeleton,
  Textarea,
} from './index'

export function ComponentShowcase() {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('')

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-terminal-bg-dark p-8 space-y-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-terminal-2xl text-terminal-green mb-8">
          Terminal UI Components Showcase
        </h1>

        {/* Buttons Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">Buttons</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Variants */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  States
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button isLoading={loading} onClick={handleLoadingTest}>
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button leftIcon={<span>→</span>}>With Left Icon</Button>
                  <Button rightIcon={<span>←</span>}>With Right Icon</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div className="mb-8">
          <h2 className="text-terminal-xl text-terminal-green mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="default">
              <CardContent>
                <p className="text-terminal-text-secondary">Default Card</p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent>
                <p className="text-terminal-text-secondary">Elevated Card</p>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <p className="text-terminal-text-secondary">Outlined Card</p>
              </CardContent>
            </Card>
            <Card variant="ghost">
              <CardContent>
                <p className="text-terminal-text-secondary">Ghost Card</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Card Example */}
        <Card className="mb-8" withGlow>
          <CardHeader>
            <h3 className="text-terminal-lg text-terminal-green">
              Card with Header and Footer
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-terminal-text-secondary">
              This is a card with a header, content area, and footer. It
              demonstrates the complete card component structure.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-4">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
              <Button size="sm" variant="primary">
                Confirm
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Form Inputs Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Form Inputs
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Input */}
              <Input
                label="Username"
                placeholder="Enter your username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Choose a unique username"
              />

              {/* Input with Icons */}
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                leftIcon={<span>@</span>}
              />

              {/* Input with Error */}
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                error="Password must be at least 8 characters"
              />

              {/* Textarea */}
              <Textarea
                label="Message"
                placeholder="Enter your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                helperText="Max 500 characters"
                rows={4}
              />

              {/* Select */}
              <Select
                label="Select an option"
                placeholder="Choose one..."
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                  {
                    value: 'option4',
                    label: 'Option 4 (Disabled)',
                    disabled: true,
                  },
                ]}
              />
            </div>
          </CardContent>
        </Card>

        {/* Checkbox and Radio Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Checkbox & Radio
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Checkboxes */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Checkboxes
                </h3>
                <div className="space-y-4">
                  <Checkbox
                    label="Accept terms and conditions"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                  <Checkbox
                    label="Subscribe to newsletter"
                    description="Receive updates about new features and releases"
                  />
                  <Checkbox label="Disabled checkbox" disabled />
                  <Checkbox label="Disabled checked" disabled checked />
                </div>
              </div>

              {/* Radio Buttons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Radio Buttons
                </h3>
                <RadioGroup label="Select a plan">
                  <Radio
                    name="plan"
                    value="free"
                    label="Free"
                    description="Basic features for personal use"
                    checked={radioValue === 'free'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="pro"
                    label="Pro"
                    description="Advanced features for professionals"
                    checked={radioValue === 'pro'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="enterprise"
                    label="Enterprise"
                    description="Full suite for large teams"
                    checked={radioValue === 'enterprise'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="disabled"
                    label="Disabled option"
                    disabled
                  />
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card>
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Complete Form Example
            </h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <Input label="Full Name" placeholder="John Doe" required />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                required
              />
              <Select
                label="Country"
                placeholder="Select your country"
                required
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'au', label: 'Australia' },
                ]}
              />
              <Textarea
                label="Bio"
                placeholder="Tell us about yourself"
                rows={4}
              />
              <Checkbox label="I agree to the terms and conditions" required />
              <div className="flex gap-4">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Loading States Section */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Loading States & Skeletons
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Loading Spinner */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Loading Spinner
                </h3>
                <div className="flex items-center gap-6">
                  <LoadingSpinner size="sm" />
                  <LoadingSpinner size="md" />
                  <LoadingSpinner size="lg" />
                </div>
              </div>

              {/* Text Skeletons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Text Skeletons
                </h3>
                <div className="space-y-4">
                  <TextSkeleton variant="heading" />
                  <TextSkeleton variant="paragraph" lines={3} />
                  <TextSkeleton variant="line" />
                </div>
              </div>

              {/* Image Skeletons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Image Skeletons
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Square
                    </p>
                    <ImageSkeleton aspectRatio="square" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Video
                    </p>
                    <ImageSkeleton aspectRatio="video" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Wide
                    </p>
                    <ImageSkeleton aspectRatio="wide" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Portrait
                    </p>
                    <ImageSkeleton aspectRatio="portrait" />
                  </div>
                </div>
              </div>

              {/* List Skeleton */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  List Skeleton
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Without Icons
                    </p>
                    <ListSkeleton items={4} />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Icons
                    </p>
                    <ListSkeleton items={4} showIcon />
                  </div>
                </div>
              </div>

              {/* Card Skeleton */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Card Skeletons
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Basic
                    </p>
                    <CardSkeleton />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Header
                    </p>
                    <CardSkeleton showHeader />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Header & Footer
                    </p>
                    <CardSkeleton showHeader showFooter />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
