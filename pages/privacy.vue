<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="prose prose-lg max-w-none">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <p class="text-gray-600 mb-6">
        <strong>Last updated:</strong> {{ lastUpdated }}
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p class="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            make a purchase, or contact us for support.
          </p>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Name and email address</li>
            <li>Payment information (processed securely through Stripe)</li>
            <li>Profile information you choose to provide</li>
            <li>Communications you send to us</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Device information (IP address, browser type)</li>
            <li>Usage information (pages visited, time spent)</li>
            <li>Location information (approximate location based on IP)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p class="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices and security alerts</li>
            <li>Respond to comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Personalize your experience</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
          <p class="text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            except as described in this policy:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>With service providers who assist us in providing our services</li>
            <li>To comply with legal obligations</li>
            <li>To protect the rights and safety of our users</li>
            <li>In connection with a merger or acquisition</li>
            <li>With your consent</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <p class="text-gray-600 mb-4">
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p class="text-gray-600 mb-4">
            However, no method of transmission over the internet or electronic storage is 100% secure, 
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
          <p class="text-gray-600 mb-4">
            You have certain rights regarding your personal information, including:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Portability of your data</li>
            <li>Objection to processing</li>
            <li>Withdrawal of consent</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
          <p class="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to collect information about your 
            browsing activities. You can control cookies through your browser settings.
          </p>
          <p class="text-gray-600 mb-4">
            For more information, please see our <NuxtLink to="/cookies" class="text-blue-600 hover:underline">Cookie Policy</NuxtLink>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
          <p class="text-gray-600 mb-4">
            Our service integrates with third-party services including:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li><strong>Supabase:</strong> Authentication and database services</li>
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>Analytics providers:</strong> To understand usage patterns</li>
          </ul>
          <p class="text-gray-600 mb-4">
            These services have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
          <p class="text-gray-600 mb-4">
            We may update this privacy policy from time to time. We will notify you of any 
            material changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
          <p class="text-gray-600 mb-4">
            If you have any questions about this privacy policy, please contact us at:
          </p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-600">
              <strong>Email:</strong> privacy@yoursite.com<br>
              <strong>Address:</strong> Your Company Address<br>
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - YourSite',
  meta: [
    {
      name: 'description',
      content: 'Learn how we collect, use, and protect your personal information. Read our comprehensive privacy policy.'
    }
  ]
})

const lastUpdated = 'December 2024'
</script> 