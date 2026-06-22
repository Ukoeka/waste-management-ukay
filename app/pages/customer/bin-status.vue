<!-- app/pages/customer/bin-status.vue -->
<script setup>
definePageMeta({
  layout: 'default'
})

// Mock states tracking telemetry loops
const fillPercentage = ref(78)
const binHardwareId = ref('BIN-9941X')
const lastPing = ref('3 minutes ago')
const hardwareStatus = ref('Healthy')

// Compute descriptive indicators based on volume metrics
const statusTier = computed(() => {
  if (fillPercentage.value >= 85) return { label: 'Action Required', color: 'text-red-600', progress: 'bg-red-500' }
  if (fillPercentage.value >= 60) return { label: 'Filling Up', color: 'text-amber-600', progress: 'bg-amber-500' }
  return { label: 'Sufficient Room', color: 'text-green-600', progress: 'bg-green-500' }
})
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Metric Display Panel: Left Telemetry Readout -->
      <div class="md:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
        <div>
          <h3 class="font-bold text-slate-800 text-base mb-1">Hardware Diagnostics</h3>
          <p class="text-xs text-slate-400">Live operational reporting nodes.</p>
        </div>
        
        <div class="space-y-3 font-medium text-xs">
          <div class="flex justify-between border-b border-slate-100 pb-2">
            <span class="text-slate-500">Device ID</span>
            <span class="font-mono font-bold text-slate-700">{{ binHardwareId }}</span>
          </div>
          <div class="flex justify-between border-b border-slate-100 pb-2">
            <span class="text-slate-500">Sensor Status</span>
            <span class="text-green-600 font-bold">● {{ hardwareStatus }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Telemetry Feed</span>
            <span class="text-slate-600 text-right">{{ lastPing }}</span>
          </div>
        </div>
      </div>

      <!-- Main Visual Progress Area: Capacity Tank -->
      <div class="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-bold text-slate-800 text-base mb-0.5">Volumetric Level Capacity</h3>
            <p class="text-xs text-slate-400">Calculated hardware load limits based on infrared tracking sensors.</p>
          </div>
          <span :class="['text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-50 border border-slate-200/60', statusTier.color]">
            {{ statusTier.label }}
          </span>
        </div>

        <!-- Custom Visual Volume Indicator Progress bar -->
        <div class="space-y-2">
          <div class="flex justify-between items-end text-sm">
            <span class="font-bold text-slate-500 text-xs">Capacity Metrics</span>
            <span class="text-3xl font-black text-slate-800 tracking-tight">{{ fillPercentage }}%</span>
          </div>
          
          <!-- Outer Track Layout -->
          <div class="w-full bg-slate-100 border border-slate-200/80 rounded-xl h-6 overflow-hidden p-1 flex">
            <!-- Inner Metric fill bar -->
            <div 
              :class="['h-full rounded-lg transition-all duration-500', statusTier.progress]"
              :style="{ width: fillPercentage + '%' }"
            ></div>
          </div>
        </div>

        <!-- System Message / Warnings based on telemetry -->
        <div v-if="fillPercentage >= 75" class="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-xs text-amber-800 leading-relaxed">
          <span class="text-base leading-none">⚠️</span>
          <div>
            <span class="font-bold block mb-0.5">High Volume Threshold Nearing Alert Bounds</span>
            Your structural container capacity value exceeds 75%. Dispatch fleet logistics telemetry points have indexed this node for automated generation cycles.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>