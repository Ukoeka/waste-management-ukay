<template>
  <div class="min-h-screen bg-slate-100 font-sans flex text-slate-800">
    <aside class="w-64 bg-[#2b3553] text-slate-300 flex flex-col hidden md:flex shrink-0">
      <div class="h-16 flex items-center px-6 bg-[#1d253b] font-bold text-white tracking-wide text-lg gap-2">
        <span class="text-blue-500">♻️</span> EcoWaste UI
      </div>
      
      <div class="p-6 text-center border-b border-slate-700">
        <div class="w-16 h-16 rounded-full bg-slate-400 mx-auto mb-3 overflow-hidden ring-2 ring-blue-500">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Profile" />
        </div>
        <h4 class="font-medium text-white text-sm">Ukay</h4>
        <span class="text-xs text-slate-400">Senior Engineer</span>
      </div>

      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 transition text-sm">
          📊 Dashboard
        </NuxtLink>
        <NuxtLink to="/admin/users" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 transition text-sm">
          📊 Users
        </NuxtLink>
        <NuxtLink to="/admin/customer/bins" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 transition text-sm">
          🗑️ Bins
        </NuxtLink>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">
      

      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>