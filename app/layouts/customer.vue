<!-- app/layouts/customer.vue -->
<template>
  <div class="min-h-screen bg-slate-100 font-sans flex text-slate-800">
    <!-- Customer Left Sidebar -->
    <aside class="w-64 bg-[#1e293b] text-slate-300 flex flex-col shrink-0">
      <!-- Brand Logo -->
      <div class="h-16 flex items-center px-6 bg-[#0f172a] font-bold text-white tracking-wide text-lg gap-2">
        <span class="text-green-500">♻️</span> EcoWaste Client
      </div>
      
      <!-- Resident Profile -->
      <div class="p-6 text-center border-b border-slate-700">
        <div class="w-16 h-16 rounded-full bg-slate-400 mx-auto mb-3 overflow-hidden ring-2 ring-green-500">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="User Profile" />
        </div>
        <h4 class="font-medium text-white text-sm">John Doe</h4>
        <span class="text-xs text-slate-400">Household Resident</span>
      </div>

      <!-- Customer Specific Navigation Links -->
      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink to="/customer/bin-status" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition text-sm font-medium" active-class="bg-[#0f172a] text-white">
          🔋 Bin Telemetry Status
        </NuxtLink>
        <NuxtLink to="/customer/history" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition text-sm font-medium" active-class="bg-[#0f172a] text-white">
          🕒 Clearance History Log
        </NuxtLink>
        <NuxtLink to="/customer/profile" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition text-sm font-medium" active-class="bg-[#0f172a] text-white">
          👤 Account Settings
        </NuxtLink>
      </nav>
    </aside>

    <!-- Content Workspace -->
    <div class="flex-1 flex flex-col min-w-0">
      <header class="h-16 bg-slate-800 flex items-center justify-between px-6 shadow-md text-white">
        <span class="text-sm font-bold tracking-wide">RESIDENT MANAGEMENT PORTAL</span>
        <NuxtLink to="/login" class="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded transition font-semibold">Sign Out</NuxtLink>
      </header>
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>