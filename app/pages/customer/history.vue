<!-- app/pages/customer/history.vue -->
<script setup>
definePageMeta({
  layout: 'default'
})

const collectionHistory = [
  { id: 'EV-8902', date: '2026-06-21', time: '08:14 AM', weight: '14.2 kg', driver: 'Robert T.', efficiency: 'Optimal' },
  { id: 'EV-8744', date: '2026-06-14', time: '08:30 AM', weight: '18.5 kg', driver: 'Robert T.', efficiency: 'Optimal' },
  { id: 'EV-8511', date: '2026-06-07', time: '09:02 AM', weight: '11.0 kg', driver: 'Sarah M.', efficiency: 'Optimal' },
  { id: 'EV-8290', date: '2026-05-31', time: '08:11 AM', weight: '22.1 kg', driver: 'Robert T.', efficiency: 'Delayed' }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-6">
    <!-- Summary Header Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Total Clearances</span>
        <span class="text-2xl font-black text-slate-800">48 Pickups</span>
      </div>
      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Cumulative Volume Captured</span>
        <span class="text-2xl font-black text-slate-800">654.8 kg</span>
      </div>
      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Current Billing Cycle Status</span>
        <span class="text-2xl font-black text-green-600">Settled</span>
      </div>
    </div>

    <!-- Data Table Logs Content Box -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-200">
        <h3 class="font-bold text-slate-800">Disposal Clearance Tracking Log</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
              <th class="p-4">Manifest ID</th>
              <th class="p-4">Clearance Timestamp</th>
              <th class="p-4">Calculated Mass</th>
              <th class="p-4">Assigned Driver Node</th>
              <th class="p-4">Cycle Efficiency</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="log in collectionHistory" :key="log.id" class="hover:bg-slate-50/60 transition">
              <td class="p-4 font-mono text-xs font-bold text-slate-700">{{ log.id }}</td>
              <td class="p-4">{{ log.date }} <span class="text-slate-400 text-xs ml-1">{{ log.time }}</span></td>
              <td class="p-4 text-slate-800 font-medium">{{ log.weight }}</td>
              <td class="p-4">{{ log.driver }}</td>
              <td class="p-4">
                <span :class="[
                  'px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide',
                  log.efficiency === 'Optimal' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                ]">
                  {{ log.efficiency }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>