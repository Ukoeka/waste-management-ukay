<!-- app/pages/admin/bins/index.vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})

const api = useApi()
const globalBins = ref([])
const pending = ref(true)
const error = ref(null)

const normalizeBin = (bin) => {
  const level = Number(bin?.level ?? bin?.fillPercentage ?? bin?.fill_percent ?? 0)

  return {
    id: bin?.id ?? bin?.hardwareId ?? bin?.binHardwareId ?? 'Unknown',
    owner: bin?.owner ?? bin?.resident ?? bin?.assignee ?? 'Unassigned',
    location: bin?.location ?? bin?.address ?? bin?.siteLocation ?? 'Unknown',
    level,
    status: bin?.status ?? (level >= 85 ? 'Full' : level >= 50 ? 'Normal' : 'Empty'),
    lastReported: bin?.lastReported ?? bin?.lastPing ?? bin?.last_updated ?? 'N/A'
  }
}

onMounted(async () => {
  try {
    console.log('admin bins: fetching', `${useRuntimeConfig().public.apiBase}/api/bins/status`)

    const response = await api('/api/bins/status')
    const bins = response?.data ?? response?.bins ?? response?.results ?? response

    globalBins.value = Array.isArray(bins)
      ? bins.map(normalizeBin)
      : bins
        ? [normalizeBin(bins)]
        : []
  } catch (err) {
    error.value = err
    console.error('admin bins: failed to load bin status', err)
  } finally {
    pending.value = false
  }
})
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-bold text-slate-800">Global Fleet Hardware Telemetry</h2>
      <p class="text-xs text-slate-500">Real-time capacity tracking log grids across all deployed automated smart telemetry tracking systems.</p>
    </div>

    <div v-if="pending" class="rounded border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
      Loading bin status...
    </div>

    <div v-else-if="error" class="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm">
      Failed to load bin status.
    </div>

    <!-- Main Table Module Component Layout -->
    <div v-else class="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
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
            <tr v-for="bin in globalBins ?? []" :key="bin.id" class="hover:bg-slate-50/50 transition duration-150">
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
