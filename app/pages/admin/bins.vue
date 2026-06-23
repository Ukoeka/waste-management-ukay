<!-- app/pages/admin/bins/index.vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})

const globalBins = [
  { id: 'BIN-9941X', owner: 'Marcus Vance', location: '44 Park Ave', status: 'Full', level: 92, lastReported: '3 mins ago' },
  { id: 'BIN-1042Z', owner: 'Marcus Vance', location: '44 Park Ave', status: 'Empty', level: 12, lastReported: '10 mins ago' },
  { id: 'BIN-8733W', owner: 'Clara Oswald', location: '12 Leaf Ln', status: 'Normal', level: 54, lastReported: '1 hr ago' },
  { id: 'BIN-0922K', owner: 'Dave Miller', location: '89 High St', status: 'Full', level: 87, lastReported: '14 mins ago' },
  { id: 'BIN-5512M', owner: 'Luke Pixel', location: '102 Tech Hub Rd', status: 'Empty', level: 4, lastReported: '48 mins ago' }
]
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-bold text-slate-800">Global Fleet Hardware Telemetry</h2>
      <p class="text-xs text-slate-500">Real-time capacity tracking log grids across all deployed automated smart telemetry tracking systems.</p>
    </div>

    <!-- Main Table Module Component Layout -->
    <div class="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="text-slate-700 font-bold border-b border-slate-200 bg-white">
              <th class="p-4 font-bold text-sm">Hardware Node ID</th>
              <th class="p-4 font-bold text-sm">Assigned Registered Resident</th>
              <th class="p-4 font-bold text-sm">Site Location Layout</th>
              <th class="p-4 font-bold text-sm">Volumetric Load Level</th>
              <th class="p-4 font-bold text-sm">Threshold Flag State</th>
              <th class="p-4 font-bold text-sm text-right">Telemetry Ping Feedback</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="bin in globalBins" :key="bin.id" class="hover:bg-slate-50/50 transition duration-150">
              <td class="p-4 font-mono font-bold text-slate-700">{{ bin.id }}</td>
              <td class="p-4 text-slate-700 font-medium">{{ bin.owner }}</td>
              <td class="p-4 text-slate-500 font-light">{{ bin.location }}</td>
              
              <!-- Core Volume Progress Tracking Cell -->
              <td class="p-4 w-48">
                <div class="flex items-center gap-3">
                  <span class="font-bold text-slate-800 w-8">{{ bin.level }}%</span>
                  <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/40">
                    <div 
                      :class="['h-full transition-all duration-300', bin.level >= 85 ? 'bg-red-500' : bin.level >= 50 ? 'bg-amber-400' : 'bg-green-500']"
                      :style="{ width: bin.level + '%' }"
                    ></div>
                  </div>
                </div>
              </td>
              
              <!-- Clean Tints status pills matching layout styles -->
              <td class="p-4">
                <span :class="[
                  'px-2.5 py-1 rounded text-[10px] font-bold tracking-normal inline-block text-center min-w-[65px]',
                  bin.status === 'Full' ? 'bg-[#f8d7da] text-[#dc3545]' : 
                  bin.status === 'Normal' ? 'bg-[#fff3cd] text-[#856404]' : 
                  'bg-[#d4edda] text-[#28a745]'
                ]">
                  {{ bin.status }}
                </span>
              </td>
              
              <td class="p-4 text-right text-slate-400 font-light">{{ bin.lastReported }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>