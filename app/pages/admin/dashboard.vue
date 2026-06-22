<script setup>
definePageMeta({
  layout: 'default'
})
const metrics = [
  { label: 'Total Enrolled Bins', value: '14,820' },
  { label: 'Alert Signals (Full)', value: '42', highlight: true },
  { label: 'Active Trucks', value: '18' },
  { label: 'Disposed Volume (Tons)', value: '61.1' }
]

const trackedBins = [
  { id: '#1042', owner: 'Marcus Vance', address: '44 Park Ave', status: 'Full', critical: true },
  { id: '#1043', owner: 'Clara Oswald', address: '12 Leaf Ln', status: 'Normal', critical: false },
  { id: '#1044', owner: 'Dave Miller', address: '89 High St', status: 'Empty', critical: false },
]
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="m in metrics" :key="m.label" class="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">{{ m.label }}</span>
        <span :class="['text-3xl font-bold tracking-tight', m.highlight ? 'text-red-500' : 'text-slate-800']">{{ m.value }}</span>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
        <h3 class="font-bold text-slate-800">Live Infrastructure Monitoring</h3>
        <span class="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded font-semibold">Live Updating</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <th class="p-4">Bin ID</th>
              <th class="p-4">Assigned Resident</th>
              <th class="p-4">Deployment Address</th>
              <th class="p-4">Fill Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="bin in trackedBins" :key="bin.id" class="hover:bg-slate-50/80 transition">
              <td class="p-4 font-semibold text-slate-700">{{ bin.id }}</td>
              <td class="p-4 text-slate-600">{{ bin.owner }}</td>
              <td class="p-4 text-slate-500">{{ bin.address }}</td>
              <td class="p-4">
                <span :class="[
                  'px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
                  bin.status === 'Full' ? 'bg-red-100 text-red-700' : bin.status === 'Normal' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                ]">
                  {{ bin.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>