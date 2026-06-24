<!-- app/pages/admin/map.vue -->
<script setup>
definePageMeta({
  layout: 'admin'
})

const selectedBin = ref(null)
const isModalOpen = ref(false)

// Metric highlights matching top card panel structural designs
const metrics = [
  { label: 'Total Enrolled Bins', value: '14,820' },
  { label: 'Alert Signals (Full)', value: '42', highlight: true },
  { label: 'Active Trucks', value: '18' },
  { label: 'Disposed Volume (Tons)', value: '61.1' }
]

// 4 distinct IoT bins pinned exactly to regional vector paths
const binsOnMap = ref([
  { id: '#1042', owner: 'Marcus Vance', address: '44 Park Ave', status: 'Full', level: 92, x: '24%', y: '28%', phone: '+1 (555) 019-2834', routeZone: 'Sector Alpha', tracking: 'JPBBN435893458', details: 'Overload alert bounds triggered' },
  { id: '#1043', owner: 'Clara Oswald', address: '12 Leaf Ln', status: 'Normal', level: 54, x: '75%', y: '22%', phone: '+1 (555) 014-9921', routeZone: 'Sector Beta', tracking: 'BDYBN435893325', details: 'Operational metric nominal' },
  { id: '#1044', owner: 'Dave Miller', address: '89 High St', status: 'Empty', level: 8, x: '35%', y: '72%', phone: '+1 (555) 017-4839', routeZone: 'Sector Alpha', tracking: 'JSNTN435884258', details: 'Cleared during previous cycle' },
  { id: '#1045', owner: 'Luke Pixel', address: '102 Tech Hub Rd', status: 'Full', level: 88, x: '82%', y: '68%', phone: '+1 (555) 012-7743', routeZone: 'Sector Gamma', tracking: 'JPABT435893678', details: 'Dispatch pickup scheduled' }
])

const openBinModal = (bin) => {
  selectedBin.value = bin
  isModalOpen.value = true
}
</script>

<template>
  <div class="space-y-6">
    
    <!-- Top Stat Blocks Row matching your previous dashboard setup -->
    <div class="bg-white rounded border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 shadow-sm">
      <div v-for="m in metrics" :key="m.label" class="p-6 text-center">
        <span class="text-xs font-semibold text-slate-400 block mb-1">{{ m.label }}</span>
        <span :class="['text-3xl font-light tracking-tight block', m.highlight ? 'text-red-500 font-normal' : 'text-slate-700']">{{ m.value }}</span>
      </div>
    </div>

    <!-- GEOSPATIAL INFRASTRUCTURE MAP (WITH ROAD SIMULATION) -->
    <div class="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-white">
        <div>
          <h3 class="font-bold text-slate-800">Geospatial Telemetry Matrix</h3>
          <p class="text-[11px] text-slate-400">Simulated routing grid showing device asset proximity configurations.</p>
        </div>
        <span class="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-semibold uppercase tracking-wider">Live Map Grid</span>
      </div>

      <div class="p-4 bg-slate-50">
        <div class="relative bg-slate-900 border border-slate-950 rounded-xl h-[400px] overflow-hidden shadow-inner flex flex-col justify-between p-4 select-none">
          
          <!-- BACKGROUND GRID LINES -->
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
          
          <!-- SIMULATED ROAD NETWORK LAYER (SVG Vectors matching bin coordinates) -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
            <!-- Main Highway Horizontal Route -->
            <path d="M -20,110 L 1800,110" fill="none" stroke="#64748b" stroke-width="14" stroke-linecap="round" />
            <path d="M -20,110 L 1800,110" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6,6" />

            <!-- Core Transit Loop Route -->
            <path d="M -20,290 L 450,290 Q 520,290 520,200 L 520,-20" fill="none" stroke="#475569" stroke-width="10" stroke-linecap="round" />
            
            <!-- Secondary Access Roads linking pins -->
            <path d="M 300,-20 L 300,420" fill="none" stroke="#475569" stroke-width="8" />
            <path d="M 850,-20 L 850,420" fill="none" stroke="#475569" stroke-width="8" />
            <path d="M 150,290 L 150,420" fill="none" stroke="#334155" stroke-width="6" />
            <path d="M 520,270 L 1200,270" fill="none" stroke="#334155" stroke-width="6" />

            <!-- Map Vector Text Markers -->
            <text x="40" y="95" fill="#475569" font-size="9" font-family="monospace" font-weight="bold" tracking-wider>PARK AVE EXPY</text>
            <text x="865" y="350" fill="#475569" font-size="9" font-family="monospace" font-weight="bold" transform="rotate(90,865,350)">TECH HUB RD</text>
          </svg>

          <!-- Floating Map Key Legend -->
          <div class="relative z-10 bg-slate-950/80 backdrop-blur border border-slate-800 p-2.5 rounded text-[10px] space-y-1 text-slate-400 max-w-[200px]">
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Full (≥ 85%)</div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-400"></span> Normal (50% - 84%)</div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500"></span> Empty (&lt; 50%)</div>
          </div>

          <!-- INTERACTIVE PIN NODES LAYER -->
          <div class="absolute inset-0">
            <div 
              v-for="bin in binsOnMap" 
              :key="bin.id"
              class="absolute group -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              :style="{ left: bin.x, top: bin.y }"
              @click="openBinModal(bin)"
            >
              <span v-if="bin.level >= 85" class="absolute -inset-2 rounded-full bg-red-500/30 animate-ping duration-1000"></span>
              <div :class="[
                'w-6 h-6 rounded-full border border-slate-950 shadow-lg flex items-center justify-center text-[10px] font-black text-white transition-all duration-150 transform hover:scale-125 hover:z-30',
                bin.level >= 85 ? 'bg-red-500' : bin.level >= 50 ? 'bg-amber-500' : 'bg-green-500'
              ]">
                📍
              </div>

              <!-- HOVER POPUP INFOTIP CARD -->
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 bg-slate-950 border border-slate-800 p-2.5 rounded shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-1.50 z-50 text-[10px] text-slate-300 space-y-0.5">
                <div class="flex justify-between items-center border-b border-slate-800 pb-1 mb-1">
                  <span class="font-mono font-bold text-white">{{ bin.id }}</span>
                  <span :class="['font-bold', bin.level >= 85 ? 'text-red-400' : 'text-slate-400']">{{ bin.level }}%</span>
                </div>
                <p class="font-semibold text-slate-200 truncate">{{ bin.owner }}</p>
                <p class="text-slate-400 truncate text-[9px]">{{ bin.address }}</p>
              </div>
            </div>
          </div>

          <div class="relative z-10 w-full text-right text-[9px] font-mono text-slate-600 tracking-wider">
            VECTOR ALIGNMENT MATRIX // LOCAL INFRASTRUCTURE NODES
          </div>
        </div>
      </div>
    </div>

    <!-- LIVE MONITORING DATA TABLE (Matches image_1295ef.png exactly) -->
    <div class="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="text-slate-700 font-bold border-b border-slate-200 bg-white">
              <th class="p-4 font-bold text-sm">ID</th>
              <th class="p-4 font-bold text-sm">Assignee</th>
              <th class="p-4 font-bold text-sm">Task Details</th>
              <th class="p-4 font-bold text-sm">Deployment Address</th>
              <th class="p-4 font-bold text-sm">Payment Status</th>
              <th class="p-4 font-bold text-sm">Volumetric Load</th>
              <th class="p-4 font-bold text-sm">Tracking Number</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="bin in binsOnMap" :key="bin.id" class="hover:bg-slate-50/50 transition duration-150">
              <td class="p-4 text-slate-500 font-medium">{{ bin.id }}</td>
              <td class="p-4 text-slate-700 font-medium">{{ bin.owner }}</td>
              <td class="p-4 text-slate-500 font-light">{{ bin.details }}</td>
              <td class="p-4 text-slate-500 font-light">{{ bin.address }}</td>
              
              <!-- Clean Tints status pills matching image_1295ef.png rules -->
              <td class="p-4">
                <span :class="[
                  'px-2.5 py-1 rounded text-[10px] font-bold tracking-normal inline-block text-center min-w-[65px]',
                  bin.status === 'Empty' ? 'bg-[#d4edda] text-[#28a745]' : 
                  bin.status === 'Normal' ? 'bg-[#fff3cd] text-[#856404]' : 
                  'bg-[#f8d7da] text-[#dc3545]'
                ]">
                  {{ bin.status === 'Empty' ? 'Approved' : bin.status === 'Normal' ? 'Pending' : 'Rejected' }}
                </span>
              </td>
              
              <td class="p-4 text-slate-700 font-medium">{{ bin.level }}% Full</td>
              <td class="p-4 font-mono text-slate-500 tracking-tight">{{ bin.tracking }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- GLOBAL ACTION MODAL DIALOG LIGHTBOX -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" @click.self="isModalOpen = false">
      <div class="w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-xs">
        
        <div class="px-5 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <div>
            <h3 class="font-mono font-bold text-slate-800 text-sm">Node Settings: {{ selectedBin?.id }}</h3>
            <span class="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">{{ selectedBin?.routeZone }}</span>
          </div>
          <button @click="isModalOpen = false" class="text-slate-400 hover:text-slate-600 font-bold text-base">&times;</button>
        </div>

        <div class="p-5 space-y-3">
          <div class="flex justify-between border-b border-slate-100 pb-1.5">
            <span class="text-slate-400">Resident Handle</span>
            <span class="text-slate-800 font-bold">{{ selectedBin?.owner }}</span>
          </div>
          <div class="flex justify-between border-b border-slate-100 pb-1.5">
            <span class="text-slate-400">Grid Address</span>
            <span class="text-slate-700 font-medium">{{ selectedBin?.address }}</span>
          </div>
          <div class="flex justify-between border-b border-slate-100 pb-1.5">
            <span class="text-slate-400">Serial Hash</span>
            <span class="text-slate-600 font-mono text-[11px]">{{ selectedBin?.tracking }}</span>
          </div>
          
          <div class="space-y-1 pt-1">
            <div class="flex justify-between font-bold text-[11px]">
              <span class="text-slate-500">Live Volume Capacity</span>
              <span :class="[selectedBin?.level >= 85 ? 'text-red-600' : 'text-slate-700']">{{ selectedBin?.level }}% Capacity</span>
            </div>
            <div class="w-full bg-slate-100 border border-slate-200 rounded-full h-2.5 overflow-hidden p-0.5 flex">
              <div 
                :class="['h-full rounded-full transition-all duration-300', selectedBin?.level >= 85 ? 'bg-red-500' : selectedBin?.level >= 50 ? 'bg-amber-500' : 'bg-green-500']"
                :style="{ width: selectedBin?.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex justify-end gap-2">
          <button @click="isModalOpen = false" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-3.5 py-1.5 rounded-lg transition text-[11px]">Close</button>
          <button @click="isModalOpen = false" class="bg-[#3f51b5] hover:bg-blue-700 text-white font-bold px-3.5 py-1.5 rounded-lg transition text-[11px] shadow-sm">Dispatch Fleet</button>
        </div>

      </div>
    </div>

  </div>
</template>