<!-- app/pages/admin/users/index.vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})

const usersList = [
  { id: 'USR-320', name: 'Marcus Vance', email: 'marcus.v@example.com', address: '44 Park Ave', phone: '+1 (555) 019-2834', status: 'Active', enrolled: '2025-04-12' },
  { id: 'USR-321', name: 'Clara Oswald', email: 'clara.o@example.com', address: '12 Leaf Ln', phone: '+1 (555) 014-9921', status: 'Active', enrolled: '2025-08-19' },
  { id: 'USR-322', name: 'Dave Miller', email: 'dave.m@example.com', address: '89 High St', phone: '+1 (555) 017-4839', status: 'Suspended', enrolled: '2026-01-05' },
  { id: 'USR-323', name: 'Luke Pixel', email: 'luke.p@example.com', address: '102 Tech Hub Rd', phone: '+1 (555) 012-7743', status: 'Active', enrolled: '2026-03-22' }
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-slate-800">Enrolled Registered Users</h2>
        <!-- <p class="text-xs text-slate-500">Directory overview of all customer accounts registered with active hardware allocations.</p> -->
      </div>
    </div>

    <!-- Data Table mimicking image_1295ef.png layout -->
    <div class="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="text-slate-700 font-bold border-b border-slate-200 bg-white">
              <th class="p-4 font-bold text-sm">Account ID</th>
              <th class="p-4 font-bold text-sm">Full Name</th>
              <th class="p-4 font-bold text-sm">Email Address</th>
              <th class="p-4 font-bold text-sm">Deployment Address</th>
              <!-- <th class="p-4 font-bold text-sm">Phone</th> -->
              <th class="p-4 font-bold text-sm">Account Status</th>
              <th class="p-4 font-bold text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="user in usersList" :key="user.id" class="hover:bg-slate-50/50 transition duration-150">
              <td class="p-4 text-slate-500 font-mono">{{ user.id }}</td>
              <td class="p-4 text-slate-700 font-medium">{{ user.name }}</td>
              <td class="p-4 text-slate-500 font-light">{{ user.email }}</td>
              <td class="p-4 text-slate-500 font-light">{{ user.address }}</td>
              <!-- <td class="p-4 text-slate-500 font-light">{{ user.phone }}</td> -->
              <td class="p-4">
                <span :class="[
                  'px-2.5 py-1 rounded text-[10px] font-bold tracking-normal inline-block text-center min-w-[75px]',
                  user.status === 'Active' ? 'bg-[#d4edda] text-[#28a745]' : 'bg-[#f8d7da] text-[#dc3545]'
                ]">
                  {{ user.status }}
                </span>
              </td>
              <td class="p-4 text-right">
                <!-- Direct Deep Route navigation link -->
                <NuxtLink :to="`/admin/users/${user.id}`" class="text-xs bg-[#3f51b5] hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded transition">
                  View Profile
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>