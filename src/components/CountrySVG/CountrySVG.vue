<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { useWindowSize } from '@vueuse/core'
import CountrySD from './countries/CountrySD.vue'
import CountrySS from './countries/CountrySS.vue'
import CountryGE from './countries/CountryGE.vue'
import CountryPE from './countries/CountryPE.vue'
import CountryBF from './countries/CountryBF.vue'
import CountryLY from './countries/CountryLY.vue'
import CountryBY from './countries/CountryBY.vue'
import CountryPK from './countries/CountryPK.vue'
import CountryID from './countries/CountryID.vue'
import CountryYE from './countries/CountryYE.vue'
import CountryMG from './countries/CountryMG.vue'
import CountryBO from './countries/CountryBO.vue'
import CountryRS from './countries/CountryRS.vue'
import CountryCI from './countries/CountryCI.vue'
import CountryDZ from './countries/CountryDZ.vue'
import CountryCH from './countries/CountryCH.vue'
import CountryCM from './countries/CountryCM.vue'
import CountryMK from './countries/CountryMK.vue'
import CountryBW from './countries/CountryBW.vue'
import CountryKE from './countries/CountryKE.vue'
import CountryJO from './countries/CountryJO.vue'
import CountryMX from './countries/CountryMX.vue'
import CountryAE from './countries/CountryAE.vue'
import CountryBZ from './countries/CountryBZ.vue'
import CountryBR from './countries/CountryBR.vue'
import CountrySL from './countries/CountrySL.vue'
import CountryML from './countries/CountryML.vue'
import CountryCD from './countries/CountryCD.vue'
import CountryIT from './countries/CountryIT.vue'
import CountrySO from './countries/CountrySO.vue'
import CountryAF from './countries/CountryAF.vue'
import CountryBD from './countries/CountryBD.vue'
import CountryDO from './countries/CountryDO.vue'
import CountryGW from './countries/CountryGW.vue'
import CountryGH from './countries/CountryGH.vue'
import CountryAT from './countries/CountryAT.vue'
import CountrySE from './countries/CountrySE.vue'
import CountryTR from './countries/CountryTR.vue'
import CountryUG from './countries/CountryUG.vue'
import CountryMZ from './countries/CountryMZ.vue'
import CountryJP from './countries/CountryJP.vue'
import CountryNZ from './countries/CountryNZ.vue'
import CountryCU from './countries/CountryCU.vue'
import CountryVE from './countries/CountryVE.vue'
import CountryPT from './countries/CountryPT.vue'
import CountryCO from './countries/CountryCO.vue'
import CountryMR from './countries/CountryMR.vue'
import CountryAO from './countries/CountryAO.vue'
import CountryDE from './countries/CountryDE.vue'
import CountryTH from './countries/CountryTH.vue'
import CountryPG from './countries/CountryPG.vue'
import CountryIQ from './countries/CountryIQ.vue'
import CountryHR from './countries/CountryHR.vue'
import CountryGL from './countries/CountryGL.vue'
import CountryNE from './countries/CountryNE.vue'
import CountryDK from './countries/CountryDK.vue'
import CountryLV from './countries/CountryLV.vue'
import CountryRO from './countries/CountryRO.vue'
import CountryZM from './countries/CountryZM.vue'
import CountryMM from './countries/CountryMM.vue'
import CountryET from './countries/CountryET.vue'
import CountryGT from './countries/CountryGT.vue'
import CountrySR from './countries/CountrySR.vue'
import CountryCZ from './countries/CountryCZ.vue'
import CountryTD from './countries/CountryTD.vue'
import CountryAL from './countries/CountryAL.vue'
import CountryFI from './countries/CountryFI.vue'
import CountrySY from './countries/CountrySY.vue'
import CountryKG from './countries/CountryKG.vue'
import CountrySB from './countries/CountrySB.vue'
import CountryOM from './countries/CountryOM.vue'
import CountryPA from './countries/CountryPA.vue'
import CountryAR from './countries/CountryAR.vue'
import CountryGB from './countries/CountryGB.vue'
import CountryCR from './countries/CountryCR.vue'
import CountryPY from './countries/CountryPY.vue'
import CountryGN from './countries/CountryGN.vue'
import CountryIE from './countries/CountryIE.vue'
import CountryNG from './countries/CountryNG.vue'
import CountryTN from './countries/CountryTN.vue'
import CountryPL from './countries/CountryPL.vue'
import CountryNA from './countries/CountryNA.vue'
import CountryZA from './countries/CountryZA.vue'
import CountryEG from './countries/CountryEG.vue'
import CountryTZ from './countries/CountryTZ.vue'
import CountrySA from './countries/CountrySA.vue'
import CountryVN from './countries/CountryVN.vue'
import CountryRU from './countries/CountryRU.vue'
import CountryHT from './countries/CountryHT.vue'
import CountryBA from './countries/CountryBA.vue'
import CountryIN from './countries/CountryIN.vue'
import CountryCA from './countries/CountryCA.vue'
import CountrySV from './countries/CountrySV.vue'
import CountryGY from './countries/CountryGY.vue'
import CountryBE from './countries/CountryBE.vue'
import CountryGQ from './countries/CountryGQ.vue'
import CountryLS from './countries/CountryLS.vue'
import CountryBG from './countries/CountryBG.vue'
import CountryBI from './countries/CountryBI.vue'
import CountryDJ from './countries/CountryDJ.vue'
import CountryAZ from './countries/CountryAZ.vue'
import CountryIR from './countries/CountryIR.vue'
import CountryMY from './countries/CountryMY.vue'
import CountryPH from './countries/CountryPH.vue'
import CountryUY from './countries/CountryUY.vue'
import CountryCG from './countries/CountryCG.vue'
import CountryEE from './countries/CountryEE.vue'
import CountryRW from './countries/CountryRW.vue'
import CountryAM from './countries/CountryAM.vue'
import CountrySN from './countries/CountrySN.vue'
import CountryTG from './countries/CountryTG.vue'
import CountryES from './countries/CountryES.vue'
import CountryGA from './countries/CountryGA.vue'
import CountryHU from './countries/CountryHU.vue'
import CountryMW from './countries/CountryMW.vue'
import CountryTJ from './countries/CountryTJ.vue'
import CountryKH from './countries/CountryKH.vue'
import CountryKR from './countries/CountryKR.vue'
import CountryHN from './countries/CountryHN.vue'
import CountryIS from './countries/CountryIS.vue'
import CountryNI from './countries/CountryNI.vue'
import CountryCL from './countries/CountryCL.vue'
import CountryMA from './countries/CountryMA.vue'
import CountryLR from './countries/CountryLR.vue'
import CountryCF from './countries/CountryCF.vue'
import CountrySK from './countries/CountrySK.vue'
import CountryLT from './countries/CountryLT.vue'
import CountryZW from './countries/CountryZW.vue'
import CountryLK from './countries/CountryLK.vue'
import CountryIL from './countries/CountryIL.vue'
import CountryPS from './countries/CountryPS.vue'
import CountryLA from './countries/CountryLA.vue'
import CountryKP from './countries/CountryKP.vue'
import CountryGR from './countries/CountryGR.vue'
import CountryTM from './countries/CountryTM.vue'
import CountryEC from './countries/CountryEC.vue'
import CountryBJ from './countries/CountryBJ.vue'
import CountrySI from './countries/CountrySI.vue'
import CountryNO from './countries/CountryNO.vue'
import CountryMD from './countries/CountryMD.vue'
import CountryUA from './countries/CountryUA.vue'
import CountryNP from './countries/CountryNP.vue'
import CountryER from './countries/CountryER.vue'
import CountryUS from './countries/CountryUS.vue'
import CountryKZ from './countries/CountryKZ.vue'
import CountryTF from './countries/CountryTF.vue'
import CountryUZ from './countries/CountryUZ.vue'
import CountryMN from './countries/CountryMN.vue'
import CountryBT from './countries/CountryBT.vue'
import CountryAQ from './countries/CountryAQ.vue'
import CountryAU from './countries/CountryAU.vue'
import CountryCN from './countries/CountryCN.vue'
import CountryFR from './countries/CountryFR.vue'
import CountryNL from './countries/CountryNL.vue'
import CountryLB from './countries/CountryLB.vue'
import CountryME from './countries/CountryME.vue'
import CountrySZ from './countries/CountrySZ.vue'
import CountryNC from './countries/CountryNC.vue'
import CountryFJ from './countries/CountryFJ.vue'
import CountryKW from './countries/CountryKW.vue'
import CountryTL from './countries/CountryTL.vue'
import CountryBS from './countries/CountryBS.vue'
import CountryVU from './countries/CountryVU.vue'
import CountryFK from './countries/CountryFK.vue'
import CountryGS from './countries/CountryGS.vue'
import CountryGM from './countries/CountryGM.vue'
import CountryQA from './countries/CountryQA.vue'
import CountryJM from './countries/CountryJM.vue'
import CountryCY from './countries/CountryCY.vue'
import CountryPR from './countries/CountryPR.vue'
import CountryBN from './countries/CountryBN.vue'
import CountryTT from './countries/CountryTT.vue'
import CountryCV from './countries/CountryCV.vue'
import CountryPF from './countries/CountryPF.vue'
import CountryWS from './countries/CountryWS.vue'
import CountryLU from './countries/CountryLU.vue'
import CountryKM from './countries/CountryKM.vue'
import CountryMU from './countries/CountryMU.vue'
import CountryFO from './countries/CountryFO.vue'
import CountryST from './countries/CountryST.vue'
import CountryVI from './countries/CountryVI.vue'
import CountryCW from './countries/CountryCW.vue'
import CountrySX from './countries/CountrySX.vue'
import CountryDM from './countries/CountryDM.vue'
import CountryTO from './countries/CountryTO.vue'
import CountryKI from './countries/CountryKI.vue'
import CountryFM from './countries/CountryFM.vue'
import CountryBH from './countries/CountryBH.vue'
import CountryAD from './countries/CountryAD.vue'
import CountryMP from './countries/CountryMP.vue'
import CountryPW from './countries/CountryPW.vue'
import CountrySC from './countries/CountrySC.vue'
import CountryIO from './countries/CountryIO.vue'
import CountryAG from './countries/CountryAG.vue'
import CountryBB from './countries/CountryBB.vue'
import CountryTC from './countries/CountryTC.vue'
import CountryVC from './countries/CountryVC.vue'
import CountryLC from './countries/CountryLC.vue'
import CountryGD from './countries/CountryGD.vue'
import CountryMT from './countries/CountryMT.vue'
import CountryMV from './countries/CountryMV.vue'
import CountryKY from './countries/CountryKY.vue'
import CountryKN from './countries/CountryKN.vue'
import CountryMS from './countries/CountryMS.vue'
import CountryBL from './countries/CountryBL.vue'
import CountryNU from './countries/CountryNU.vue'
import CountryPM from './countries/CountryPM.vue'
import CountryCK from './countries/CountryCK.vue'
import CountryWF from './countries/CountryWF.vue'
import CountryAS from './countries/CountryAS.vue'
import CountryMH from './countries/CountryMH.vue'
import CountryAW from './countries/CountryAW.vue'
import CountryLI from './countries/CountryLI.vue'
import CountryVG from './countries/CountryVG.vue'
import CountrySH from './countries/CountrySH.vue'
import CountryJE from './countries/CountryJE.vue'
import CountryAI from './countries/CountryAI.vue'
import CountryMF from './countries/CountryMF.vue'
import CountryGG from './countries/CountryGG.vue'
import CountrySM from './countries/CountrySM.vue'
import CountryBM from './countries/CountryBM.vue'
import CountryTV from './countries/CountryTV.vue'
import CountryNR from './countries/CountryNR.vue'
import CountryGI from './countries/CountryGI.vue'
import CountryPN from './countries/CountryPN.vue'
import CountryMC from './countries/CountryMC.vue'
import CountryVA from './countries/CountryVA.vue'
import CountryIM from './countries/CountryIM.vue'
import CountryGU from './countries/CountryGU.vue'
import CountrySG from './countries/CountrySG.vue'
import CountryTK from './countries/CountryTK.vue'
import CountryTW from './countries/CountryTW.vue'
import { useCountryStore } from '@/stores/countryStore.ts'
import type { Country } from '@/services/resources/country/types.ts'

const countryStore = useCountryStore()

const { width, height } = useWindowSize({
  initialWidth: 1200,
  initialHeight: 800,
})

const latestCountryFocused = ref<Country | null>(null)
const viewBoxWidth = ref(width.value)
const viewBoxHeight = ref(height.value)
const viewBoxX = ref(0)
const viewBoxY = ref(0)
const isPanning = ref(false)

const svgRef = useTemplateRef<SVGElement>('svgRef')

let startX = 0
let startY = 0

const MIN_ZOOM = 50
const MAX_ZOOM = 1500

const classes = computed(() => {
  const base = [
    // '[stroke-dasharray:1]',
    '[stroke-linejoin:round]',
    'stroke-stone-400',
    '[stroke-width:0.15]',
    'bg-stone-800',
  ]

  if (isPanning.value) {
    base.push('cursor-move')
  }

  return base
})

function getEventCoords(e: MouseEvent | TouchEvent) {
  if ('touches' in e && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  } else if ('clientX' in e && 'clientY' in e) {
    return { x: e.clientX, y: e.clientY }
  }
  return { x: 0, y: 0 }
}

function onPointerDown(e: MouseEvent | TouchEvent) {
  isPanning.value = true
  const { x, y } = getEventCoords(e)
  startX = x
  startY = y
}

function onPointerMove(e: MouseEvent | TouchEvent) {
  if (!isPanning.value) return

  const svg = e.currentTarget as SVGElement
  const { clientWidth, clientHeight } = svg
  if (clientWidth === 0 || clientHeight === 0) return

  const { x, y } = getEventCoords(e)

  const dx = x - startX
  const dy = y - startY

  const scaleX = viewBoxWidth.value / clientWidth
  const scaleY = viewBoxHeight.value / clientHeight

  viewBoxX.value -= dx * scaleX
  viewBoxY.value -= dy * scaleY

  startX = x
  startY = y
}

function onPointerUp() {
  isPanning.value = false
}

function onWheel(e: Event) {
  const { clientWidth, clientHeight } = e.currentTarget as SVGElement

  if (clientWidth === 0 || clientHeight === 0) return

  const { offsetX, offsetY, deltaY } = e as WheelEvent

  const zoomFactor = deltaY > 0 ? 1.1 : 0.9

  // Translates the mouse coordinates (offsetX/Y) into SVG coordinate space using proportions
  // of the viewBox. These become the reference point we want to zoom into.
  const mouseX = (offsetX / clientWidth) * viewBoxWidth.value + viewBoxX.value
  const mouseY = (offsetY / clientHeight) * viewBoxHeight.value + viewBoxY.value

  // Calculates the new zoomed width/height. We clamp the
  // values to make sure we don't zoom in/out too far.
  const newWidth = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, viewBoxWidth.value * zoomFactor))
  const newHeight = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, viewBoxHeight.value * zoomFactor))

  // Then we find the vector from the top-left of the
  // viewBox to the mouse point, in SVG coordinates.
  const dx = mouseX - viewBoxX.value
  const dy = mouseY - viewBoxY.value

  // Calculates how much the viewBox is scaling along each x/y-axis
  const scaleX = newWidth / viewBoxWidth.value
  const scaleY = newHeight / viewBoxHeight.value

  // Then we shift the viewBox origin so that after scaling, the point under the
  // mouse remains fixed. It reverses the movement introduced by the scale.
  viewBoxX.value = mouseX - dx * scaleX
  viewBoxY.value = mouseY - dy * scaleY
  viewBoxWidth.value = newWidth
  viewBoxHeight.value = newHeight
}

function focusOnCountry(countryCode = 'es', easingDuration = 1000) {
  if (!svgRef.value) return

  const country: SVGGraphicsElement | null = svgRef.value.querySelector(`#${countryCode}`)

  if (!country) throw new Error(`country with code ${countryCode} not found`)

  const bbox = country.getBBox()
  const padding = 50

  animateViewBoxTo(
    bbox.x - padding,
    bbox.y - padding,
    bbox.width + padding * 2,
    bbox.height + padding * 2,
    easingDuration,
  )
}

// @see https://easings.net/#easeInOutCubic
function easeInOutCubic(t: number): number {
  return t * t * (3 - 2 * t)
}

function animateViewBoxTo(x: number, y: number, width: number, height: number, duration = 1000) {
  const startX = viewBoxX.value
  const startY = viewBoxY.value
  const startWidth = viewBoxWidth.value
  const startHeight = viewBoxHeight.value

  const dx = x - startX
  const dy = y - startY
  const dWidth = width - startWidth
  const dHeight = height - startHeight

  const startTime = performance.now()

  function step(now: number) {
    const rawT = Math.min((now - startTime) / duration, 1)
    const t = easeInOutCubic(rawT)

    viewBoxX.value = startX + dx * t
    viewBoxY.value = startY + dy * t
    viewBoxWidth.value = startWidth + dWidth * t
    viewBoxHeight.value = startHeight + dHeight * t

    if (rawT < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => focusOnCountry('es', 0))

countryStore.$subscribe((mutation, state) => {
  if (mutation.type !== 'direct') return

  if (!state.latestCountryGuessed) return

  if (
    latestCountryFocused.value &&
    latestCountryFocused.value.isoAlpha2Code === state.latestCountryGuessed.isoAlpha2Code
  )
    return

  latestCountryFocused.value = state.latestCountryGuessed
  focusOnCountry(state.latestCountryGuessed.isoAlpha2Code.toLowerCase())
})
</script>

<template>
  <!--  End product with labels by ahuseyn (https://github.com/ahuseyn/) - MIT license-->
  <!--  Source of the map: https://commons.wikimedia.org/wiki/File:BlankMap-World.svg (public domain)-->
  <!--  Guide for the class names:-->
  <!--  .eu - for members of European Union-->
  <!--  .eaeu - for members of Eurasian Economic Union-->
  <!--  .limitxx - for territories with limited or no recognition. All of them are overlays over their host countries, and so not showing them doesn't leave any gaps on the map-->
  <!--  .landxx - for all of the land. All land, as opposed to water, should belong to this class; in order to modify the coastline for land pieces with no borders on them a special class coastxx is used-->
  <!--  .coastxx - for coastlines of islands and continents with no borders on them. All of them should also belong to the class landxx-->
  <!--  .antxx - for territories without permanent population (the largest of which is Antarctica)-->
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`"
    :width="width"
    :height="height"
    :class="classes"
    @mousedown.prevent="onPointerDown"
    @mousemove.prevent="onPointerMove"
    @mouseup.prevent="onPointerUp"
    @mouseleave.prevent="onPointerUp"
    @touchstart.prevent="onPointerDown"
    @touchmove.prevent="onPointerMove"
    @touchend.prevent="onPointerUp"
    @wheel="onWheel"
  >
    <CountrySD />
    <CountrySS />
    <CountryGE />
    <CountryPE />
    <CountryBF />
    <CountryLY />
    <CountryBY />
    <CountryPK />
    <CountryID />
    <CountryYE />
    <CountryMG />
    <CountryBO />
    <CountryRS />
    <CountryCI />
    <CountryDZ />
    <CountryCH />
    <CountryCM />
    <CountryMK />
    <CountryBW />
    <CountryKE />
    <CountryJO />
    <CountryMX />
    <CountryAE />
    <CountryBZ />
    <CountryBR />
    <CountrySL />
    <CountryML />
    <CountryCD />
    <CountryIT />
    <CountrySO />
    <CountryAF />
    <CountryBD />
    <CountryDO />
    <CountryGW />
    <CountryGH />
    <CountryAT />
    <CountrySE />
    <CountryTR />
    <CountryUG />
    <CountryMZ />
    <CountryJP />
    <CountryNZ />
    <CountryCU />
    <CountryVE />
    <CountryPT />
    <CountryCO />
    <CountryMR />
    <CountryAO />
    <CountryDE />
    <CountryTH />
    <CountryPG />
    <CountryIQ />
    <CountryHR />
    <CountryGL />
    <CountryNE />
    <CountryDK />
    <CountryLV />
    <CountryRO />
    <CountryZM />
    <CountryMM />
    <CountryET />
    <CountryGT />
    <CountrySR />
    <CountryCZ />
    <CountryTD />
    <CountryAL />
    <CountryFI />
    <CountrySY />
    <CountryKG />
    <CountrySB />
    <CountryOM />
    <CountryPA />
    <CountryAR />
    <CountryGB />
    <CountryCR />
    <CountryPY />
    <CountryGN />
    <CountryIE />
    <CountryNG />
    <CountryTN />
    <CountryPL />
    <CountryNA />
    <CountryZA />
    <CountryEG />
    <CountryTZ />
    <CountrySA />
    <CountryVN />
    <CountryRU />
    <CountryHT />
    <CountryBA />
    <CountryIN />
    <CountryCA />
    <CountrySV />
    <CountryGY />
    <CountryBE />
    <CountryGQ />
    <CountryLS />
    <CountryBG />
    <CountryBI />
    <CountryDJ />
    <CountryAZ />
    <CountryIR />
    <CountryMY />
    <CountryPH />
    <CountryUY />
    <CountryCG />
    <CountryEE />
    <CountryRW />
    <CountryAM />
    <CountrySN />
    <CountryTG />
    <CountryES />
    <CountryGA />
    <CountryHU />
    <CountryMW />
    <CountryTJ />
    <CountryKH />
    <CountryKR />
    <CountryHN />
    <CountryIS />
    <CountryNI />
    <CountryCL />
    <CountryMA />
    <CountryLR />
    <CountryCF />
    <CountrySK />
    <CountryLT />
    <CountryZW />
    <CountryLK />
    <CountryIL />
    <CountryPS />
    <CountryLA />
    <CountryKP />
    <CountryGR />
    <CountryTM />
    <CountryEC />
    <CountryBJ />
    <CountrySI />
    <CountryNO />
    <CountryMD />
    <CountryUA />
    <CountryNP />
    <CountryER />
    <CountryUS />
    <CountryKZ />
    <CountryTF />
    <CountryUZ />
    <CountryMN />
    <CountryBT />
    <CountryAQ />
    <CountryAU />
    <CountryCN />
    <CountryFR />
    <CountryNL />
    <CountryLB />
    <CountryME />
    <CountrySZ />
    <CountryNC />
    <CountryFJ />
    <CountryKW />
    <CountryTL />
    <CountryBS />
    <CountryVU />
    <CountryFK />
    <CountryGS />
    <CountryGM />
    <CountryQA />
    <CountryJM />
    <CountryCY />
    <CountryPR />
    <CountryBN />
    <CountryTT />
    <CountryCV />
    <CountryPF />
    <CountryWS />
    <CountryLU />
    <CountryKM />
    <CountryMU />
    <CountryFO />
    <CountryST />
    <CountryVI />
    <CountryCW />
    <CountrySX />
    <CountryDM />
    <CountryTO />
    <CountryKI />
    <CountryFM />
    <CountryBH />
    <CountryAD />
    <CountryMP />
    <CountryPW />
    <CountrySC />
    <CountryIO />
    <CountryAG />
    <CountryBB />
    <CountryTC />
    <CountryVC />
    <CountryLC />
    <CountryGD />
    <CountryMT />
    <CountryMV />
    <CountryKY />
    <CountryKN />
    <CountryMS />
    <CountryBL />
    <CountryNU />
    <CountryPM />
    <CountryCK />
    <CountryWF />
    <CountryAS />
    <CountryMH />
    <CountryAW />
    <CountryLI />
    <CountryVG />
    <CountrySH />
    <CountryJE />
    <CountryAI />
    <CountryMF />
    <CountryGG />
    <CountrySM />
    <CountryBM />
    <CountryTV />
    <CountryNR />
    <CountryGI />
    <CountryPN />
    <CountryMC />
    <CountryVA />
    <CountryIM />
    <CountryGU />
    <CountrySG />
    <CountryTK />
    <CountryTW />

    <g id="labels" style="display: none">
      <text y="718.91302" font-size="10px" x="2220.7449" id="txt-id" class="id">Indonesia</text>
      <text y="563.49451" font-size="10px" x="1669.0315" id="txt-ye" class="ye">Yemen</text>
      <text y="426.23184" font-size="8px" x="1578.9727" id="txt-jo" class="jo">Jordan</text>
      <text y="496.68536" font-size="8px" x="1705.6088" id="txt-ae" class="ae">UAE</text>
      <text y="480.24515" font-size="5px" x="1688.6198" id="txt-qa" class="qa">Qatar</text>
      <text y="471.52017" font-size="5px" x="1687.162" id="txt-bh" class="bh">Bahrain</text>
      <text y="445.75217" font-size="5px" x="1659.0693" id="txt-kw" class="kw">Kuwait</text>
      <text y="405.78354" font-size="10px" x="1780.6956" id="txt-af" class="af">Afghanistan</text>
      <text y="441.45355" font-size="10px" x="1816.5222" id="txt-pk" class="pk">Pakistan</text>
      <text y="491.64124" font-size="8px" x="1974.4435" id="txt-bd" class="bd">Bangladesh</text>
      <text y="388.75128" font-size="10px" x="2297.5994" id="txt-jp" class="jp">Japan</text>
      <text y="570.96667" font-size="10px" x="2072.332" id="txt-th" class="th">Thailand</text>
      <text y="754.63202" font-size="8px" x="2418.1165" id="txt-pg" class="pg">
        Papua New Guinea
      </text>
      <text y="415.19803" font-size="10px" x="1616.7949" id="txt-iq" class="iq">Iraq</text>
      <text y="519.06909" font-size="10px" x="2024.7035" id="txt-mm" class="mm">Myanmar</text>
      <text y="397.2218" font-size="10px" x="1585.1798" id="txt-sy" class="sy">Syria</text>
      <text y="339.78799" font-size="8px" x="1832.6521" id="txt-kg" class="kg">Kyrgyzstan</text>
      <text y="778.375" font-size="8px" x="2521.9033" id="txt-sb" class="sb">Solomon Islands</text>
      <text y="849.11292" font-size="8px" x="2571.5002" id="txt-vu" class="vu">Vanuatu</text>
      <text y="850.37616" font-size="5px" x="2653.0676" id="txt-fj" class="fj">Fiji</text>
      <text y="884" font-size="5px" x="2695" id="txt-to" class="to">Tonga</text>
      <text y="817.42334" font-size="5px" x="2734.1204" id="txt-ws" class="ws">Samoa</text>
      <text y="772" font-size="5px" x="2668" id="txt-tv" class="tv">Tuvalu</text>
      <text y="640.785" font-size="5px" x="2627" id="txt-mh" class="mh">Marshall Islands</text>
      <text y="639.918" font-size="5px" x="2521" id="txt-fm" class="fm">Micronesia</text>
      <text y="682.146" font-size="5px" x="2569" id="txt-nr" class="nr">Nauru</text>
      <text y="511.08319" font-size="10px" x="1738.2465" id="txt-om" class="om">Oman</text>
      <text y="489.68729" font-size="10px" x="1634.4956" id="txt-sa" class="sa">Saudi Arabia</text>
      <text y="581.89429" font-size="8px" x="2134.79" id="txt-vn" class="vn">Vietnam</text>
      <text y="513.91119" font-size="10px" x="1890.1437" id="txt-in" class="in">India</text>
      <text y="663.06677" font-size="10px" x="2080.6731" id="txt-my" class="my">Malaysia</text>
      <text y="689.21808" font-size="5px" x="2105.0349" id="txt-sg" class="sg">Singapore</text>
      <text y="660.15814" font-size="5px" x="2174.1248" id="txt-bn" class="bn">Brunei</text>
      <text y="635.40137" font-size="5px" x="2334.3247" id="txt-pw" class="pw">Palau</text>
      <text y="588.14905" font-size="10px" x="2228.7905" id="txt-ph" class="ph">Philippines</text>
      <text y="365.98386" font-size="8px" x="1812.0209" id="txt-tj" class="tj">Tajikistan</text>
      <text y="590.63562" font-size="8px" x="2097.2822" id="txt-kh" class="kh">Cambodia</text>
      <text y="385.42383" font-size="8px" x="2222.3567" id="txt-kr" class="kr">South Korea</text>
      <text y="640.64661" font-size="8px" x="1916.8529" id="txt-lk" class="lk">Sri Lanka</text>
      <text y="675.359" font-size="8px" x="1862" id="txt-mv" class="mv">Maldives</text>
      <text y="529.09528" font-size="10px" x="2072.1438" id="txt-la" class="la">Laos</text>
      <text y="357.47052" font-size="8px" x="2199.9438" id="txt-kp" class="kp">North Korea</text>
      <text y="364.84726" font-size="8px" x="1725.6024" id="txt-tm" class="tm">Turkmenistan</text>
      <text y="458.16107" font-size="8px" x="1923.4584" id="txt-np" class="np">Nepal</text>
      <text y="331.55136" font-size="8px" x="1741.6998" id="txt-uz" class="uz">Uzbekistan</text>
      <text y="465.04547" font-size="5px" x="1972.3185" id="txt-bt" class="bt">Bhutan</text>
      <text y="294.19049" font-size="10px" x="2008.8169" id="txt-mn" class="mn">Mongolia</text>
      <text y="285.02301" font-size="10px" x="1757.4412" id="txt-kz" class="kz">Kazakhstan</text>
      <text y="389.49921" font-size="10px" x="2022.9918" id="txt-cn" class="cn">China</text>
      <text y="418.03491" font-size="10px" x="1694.3555" id="txt-ir" class="ir">Iran</text>
      <text y="396.99872" font-size="5px" x="1544.3647" id="txt-cy" class="cy">Cyprus</text>
      <text y="405.00769" font-size="5px" x="1556.5747" id="txt-lb" class="lb">Lebanon</text>
      <text y="777.00464" font-size="5px" x="2270.6658" id="txt-tl" class="tl">Timor-Leste</text>
      <text y="778.0509" font-size="10px" x="724.11377" id="txt-pe" class="pe">Peru</text>
      <text y="849.52332" font-size="10px" x="816.17609" id="txt-bo" class="bo">Bolivia</text>
      <text y="552.12366" font-size="5px" x="637.64191" id="txt-bz" class="bz">Belize</text>
      <text y="533.06512" font-size="5px" x="791.87482" id="txt-do" class="do">
        Dominican Republic
      </text>
      <text y="566.99115" font-size="5px" x="850.44904" id="txt-dm" class="dm">Dominica</text>
      <text y="580.31586" font-size="5px" x="850.42523" id="txt-lc" class="lc">St Lucia</text>
      <text y="587.60699" font-size="5px" x="862.15143" id="txt-bb" class="bb">Barbados</text>
      <text y="596.5636" font-size="5px" x="844.83459" id="txt-gd" class="gd">Grenada</text>
      <text y="585.43109" font-size="5px" x="795.13501" id="txt-vc" class="vc">
        St Vincent and the Grenadines
      </text>
      <text y="510.70587" font-size="10px" x="707.77985" id="txt-cu" class="cu">Cuba</text>
      <text y="632.95349" font-size="10px" x="797.60266" id="txt-ve" class="ve">Venezuela</text>
      <text y="669.18433" font-size="10px" x="747.0658" id="txt-co" class="co">Colombia</text>
      <text y="565.87341" font-size="5px" x="619.409" id="txt-gt" class="gt">Guatemala</text>
      <text y="668.89185" font-size="5px" x="873.13361" id="txt-sr" class="sr">Suriname</text>
      <text y="626.82092" font-size="5px" x="685.75873" id="txt-pa" class="pa">Panama</text>
      <text y="1017.0184" font-size="10px" x="846.73413" id="txt-ar" class="ar">Argentina</text>
      <text y="612.19818" font-size="5px" x="667.69922" id="txt-cr" class="cr">Costa Rica</text>
      <text y="901.29456" font-size="10px" x="866.00464" id="txt-py" class="py">Paraguay</text>
      <text y="541.47424" font-size="5px" x="751.91406" id="txt-ht" class="ht">Haiti</text>
      <text y="545.17487" font-size="5px" x="719.3476" id="txt-jm" class="jm">Jamaica</text>
      <text y="609.93365" font-size="5px" x="861.53656" id="txt-tt" class="tt">
        Trinidad and Tobago
      </text>
      <text y="488.08926" font-size="5px" x="721.40259" id="txt-bs" class="bs">Bahamas</text>
      <text y="583.64948" font-size="5px" x="619.94543" id="txt-sv" class="sv">El Salvador</text>
      <text y="648.91272" font-size="8px" x="850.4295" id="txt-gy" class="gy">Guyana</text>
      <text y="987.78137" font-size="10px" x="912.73846" id="txt-uy" class="uy">Uruguay</text>
      <text y="571.30505" font-size="5px" x="648.42804" id="txt-hn" class="hn">Honduras</text>
      <text y="590.81769" font-size="5px" x="652.99615" id="txt-ni" class="ni">Nicaragua</text>
      <text y="906.1745" font-size="10px" x="780.60474" id="txt-cl" class="cl">Chile</text>
      <text y="711.83704" font-size="10px" x="696.93115" id="txt-ec" class="ec">Ecuador</text>
      <text y="684" font-size="10px" x="115" id="txt-ki" class="ki">Kiribati</text>
      <text y="494.10706" font-size="10px" x="542.16974" id="txt-mx" class="mx">Mexico</text>
      <text y="800" font-size="10px" x="915" id="txt-br" class="br">Brazil</text>
      <text y="549.69513" font-size="5px" x="864.49451" id="txt-ag" class="ag">
        Antigua and Barbuda
      </text>
      <text y="552.67902" font-size="5px" x="806.84888" id="txt-kn" class="kn">
        St Kitts and Nevis
      </text>
      <text y="297.11588" font-size="5px" x="1364.3613" id="txt-ch" class="ch">Switzerland</text>
      <text y="333.94336" font-size="8px" x="1397.6395" id="txt-it" class="it">Italy</text>
      <text y="289.08755" font-size="6px" x="1409.4379" id="txt-at" class="at">Austria</text>
      <text y="193.24135" font-size="8px" x="1409.8434" id="txt-se" class="se">Sweden</text>
      <text y="1071.3976" font-size="10px" x="2503.4934" id="txt-nz" class="nz">New Zealand</text>
      <text y="920" font-size="10px" x="2300" id="txt-au" class="au">Australia</text>
      <text y="363.57135" font-size="8px" x="1237.3737" id="txt-pt" class="pt">Portugal</text>
      <text y="257.3385" font-size="8px" x="1381.1938" id="txt-de" class="de">Germany</text>
      <text y="297.9642" font-size="8px" x="1327.9114" id="txt-fr" class="fr">France</text>
      <text y="222.44363" font-size="7px" x="1371.4584" id="txt-dk" class="dk">Denmark</text>
      <text y="169.45424" font-size="8px" x="1473.5879" id="txt-fi" class="fi">Finland</text>
      <text y="219.99158" font-size="9px" x="1291.798" id="txt-gb" class="gb">United Kingdom</text>
      <text y="246.57124" font-size="8px" x="1257.9865" id="txt-ie" class="ie">Ireland</text>
      <text y="261.82797" font-size="5px" x="1336.8248" id="txt-be" class="be">Belgium</text>
      <text y="271.18405" font-size="5px" x="1350.8973" id="txt-lu" class="lu">Luxembourg</text>
      <text y="248.09087" font-size="5px" x="1343.9731" id="txt-nl" class="nl">Netherlands</text>
      <text y="352.88065" font-size="8px" x="1283.2715" id="txt-es" class="es">Spain</text>
      <text y="151.34531" font-size="8px" x="1213.105" id="txt-is" class="is">Iceland</text>
      <text y="358.68756" font-size="8px" x="1464.7212" id="txt-gr" class="gr">Greece</text>
      <text y="428.69461" font-size="5px" x="1557.3093" id="txt-il" class="il">Israel</text>
      <text y="180.42693" font-size="8px" x="1371.4775" id="txt-no" class="no">Norway</text>
      <text x="590" font-size="10px" y="360" id="txt-us" class="us">United States of America</text>
      <text x="600" font-size="10px" y="220" id="txt-ca" class="ca">Canada</text>
      <text y="363.40494" font-size="10px" x="1556.1891" id="txt-tr" class="tr">Türkiye</text>
      <text y="332.15707" font-size="5px" x="1318.512" id="txt-ad" class="ad">Andorra</text>
      <text y="320" font-size="4px" x="1358.89" id="txt-mc" class="mc">Monaco</text>
      <text y="391.47391" font-size="5px" x="1408.9003" id="txt-mt" class="mt">Malta</text>
      <text y="291.06625" font-size="4px" x="1373.5931" id="txt-li" class="li">Liechtenstein</text>
      <text y="336.25546" font-size="8px" x="1609.5278" id="txt-ge" class="ge">Georgia</text>
      <text y="351.51373" font-size="8px" x="1652.6022" id="txt-az" class="az">Azerbaijan</text>
      <text y="241.0155" font-size="8px" x="1493.6199" id="txt-by" class="by">Belarus</text>
      <text y="211.06946" font-size="8px" x="1469.2612" id="txt-lv" class="lv">Latvia</text>
      <text y="305.54291" font-size="8px" x="1477.6476" id="txt-ro" class="ro">Romania</text>
      <text y="270.759" font-size="5px" x="1412.5178" id="txt-cz" class="cz">Czechia</text>
      <text y="251.81299" font-size="10px" x="1437.0449" id="txt-pl" class="pl">Poland</text>
      <text y="278.60742" font-size="10px" x="1524.8511" id="txt-ua" class="ua">Ukraine</text>
      <text y="331.05615" font-size="5px" x="1483.8081" id="txt-bg" class="bg">Bulgaria</text>
      <text y="197.34299" font-size="8px" x="1469.585" id="txt-ee" class="ee">Estonia</text>
      <text y="349.94122" font-size="5px" x="1617.3099" id="txt-am" class="am">Armenia</text>
      <text y="278.73535" font-size="5px" x="1442.677" id="txt-sk" class="sk">Slovakia</text>
      <text y="294.95929" font-size="5px" x="1501.9216" id="txt-md" class="md">Moldova</text>
      <text y="331.24686" font-size="5px" x="1436.8795" id="txt-me" class="me">Montenegro</text>
      <text y="224.97029" font-size="8px" x="1465.3401" id="txt-lt" class="lt">Lithuania</text>
      <text y="301.7666" font-size="5px" x="1404.0433" id="txt-si" class="si">Slovenia</text>
      <text x="1900" font-size="10px" y="175" id="txt-ru" class="ru">Russian Federation</text>
      <text y="594.9671" font-size="8px" x="1289.6969" id="txt-bf" class="bf">Burkina Faso</text>
      <text y="863.07324" font-size="10px" x="1654.1272" id="txt-mg" class="mg">Madagascar</text>
      <text y="740" font-size="5px" x="1738" id="txt-sc" class="sc">Seychelles</text>
      <text y="631.63824" font-size="8px" x="1258.7903">Côte d'Ivoire</text>
      <text y="457.92175" font-size="10px" x="1323.2173" id="txt-dz" class="dz">Algeria</text>
      <text y="659.35638" font-size="8px" x="1390.751" id="txt-cm" class="cm">Cameroon</text>
      <text y="899.40717" font-size="10px" x="1483.2522" id="txt-bw" class="bw">Botswana</text>
      <text y="698.75867" font-size="10px" x="1590.3281" id="txt-ke" class="ke">Kenya</text>
      <text y="628.7439" font-size="8px" x="1191.1814" id="txt-sl" class="sl">Sierra Leone</text>
      <text y="542.70844" font-size="10px" x="1289.7748" id="txt-ml" class="ml">Mali</text>
      <text y="726.14374" font-size="10px" x="1480.7742" id="txt-cd" class="cd">DRC</text>
      <text y="596.77954" font-size="5px" x="1174.0468" id="txt-gw" class="gw">Guinea-Bissau</text>
      <text y="584.12494" font-size="5px" x="1168.8392" id="txt-gm" class="gm">Gambia</text>
      <text y="642.77148" font-size="8px" x="1290.2545" id="txt-gh" class="gh">Ghana</text>
      <text y="686.17926" font-size="8px" x="1551.2091" id="txt-ug" class="ug">Uganda</text>
      <text y="898.91803" font-size="10px" x="1577.576" id="txt-mz" class="mz">Mozambique</text>
      <text y="537.98151" font-size="10px" x="1217.6534" id="txt-mr" class="mr">Mauritania</text>
      <text y="809.46924" font-size="10px" x="1436.9891" id="txt-ao" class="ao">Angola</text>
      <text y="548.38153" font-size="10px" x="1378.0632" id="txt-ne" class="ne">Niger</text>
      <text y="830.42432" font-size="10px" x="1498.728" id="txt-zm" class="zm">Zambia</text>
      <text y="631.90381" font-size="10px" x="1602.5502" id="txt-et" class="et">Ethiopia</text>
      <text y="675.08722" font-size="10px" x="1650.7721" id="txt-so" class="so">Somalia</text>
      <text y="564.73346" font-size="10px" x="1442.9248" id="txt-td" class="td">Chad</text>
      <text y="606.36633" font-size="8px" x="1216.8378" id="txt-gn" class="gn">Guinea</text>
      <text y="619.96619" font-size="10px" x="1366.7664" id="txt-ng" class="ng">Nigeria</text>
      <text y="406.26553" font-size="10px" x="1385.4893" id="txt-tn" class="tn">Tunisia</text>
      <text y="872.64642" font-size="10px" x="1429.3054" id="txt-na" class="na">Namibia</text>
      <text y="941.47339" font-size="10px" x="1494.1621" id="txt-za" class="za">South Africa</text>
      <text y="471.67999" font-size="10px" x="1525.1575" id="txt-eg" class="eg">Egypt</text>
      <text y="753.586" font-size="10px" x="1567.364" id="txt-tz" class="tz">Tanzania</text>
      <text y="687.32825" font-size="8px" x="1349.7682" id="txt-gq" class="gq">
        Equatorial Guinea
      </text>
      <text y="956.88422" font-size="5px" x="1510.8945" id="txt-ls" class="ls">Lesotho</text>
      <text y="929.97034" font-size="5px" x="1536.2305" id="txt-sz" class="sz">Eswatini</text>
      <text y="727.74951" font-size="5px" x="1529.2256" id="txt-bi" class="bi">Burundi</text>
      <text y="599.32764" font-size="5px" x="1628.8387" id="txt-dj" class="dj">Djibouti</text>
      <text y="695.21625" font-size="5px" x="1429.5509" id="txt-cg" class="cg">Congo</text>
      <text y="717.27234" font-size="5px" x="1528.7638" id="txt-rw" class="rw">Rwanda</text>
      <text y="573.07379" font-size="8px" x="1191.8333" id="txt-sn" class="sn">Senegal</text>
      <text y="629.42578" font-size="5px" x="1309.0535" id="txt-tg" class="tg">Togo</text>
      <text y="699.52203" font-size="5px" x="1332.5596" id="txt-st" class="st">
        São Tomé and Príncipe
      </text>
      <text y="705.44208" font-size="10px" x="1389.4691" id="txt-ga" class="ga">Gabon</text>
      <text y="817.90936" font-size="8px" x="1559.9877" id="txt-mw" class="mw">Malawi</text>
      <text y="802.87885" font-size="5px" x="1637.2527" id="txt-km" class="km">Comoros</text>
      <text y="878.42297" font-size="5px" x="1739.7469" id="txt-mu" class="mu">Mauritius</text>
      <text y="423.63742" font-size="10px" x="1251.0673" id="txt-ma" class="ma">Morocco</text>
      <text y="642.68323" font-size="8px" x="1228.6833" id="txt-lr" class="lr">Liberia</text>
      <text y="646.77502" font-size="8px" x="1458.3704" id="txt-cf" class="cf">
        Central African Republic
      </text>
      <text y="867.0235" font-size="10px" x="1527.1334" id="txt-zw" class="zw">Zimbabwe</text>
      <text y="609.84711" font-size="8px" x="1318.2048" id="txt-bj" class="bj">Benin</text>
      <text y="567.19128" font-size="10px" x="1602.6462" id="txt-er" class="er">Eritrea</text>
      <text y="470.68152" font-size="10px" x="1430.8293" id="txt-ly" class="ly">Libya</text>
      <text y="564.01099" font-size="8px" x="1103.2395" id="txt-cv" class="cv">Cabo Verde</text>
      <text y="307.02469" font-size="5px" x="1424.2291" id="txt-hr" class="hr">Croatia</text>
      <text y="320" font-size="4px" x="1393.24" id="txt-sm" class="sm">San Marino</text>
      <text y="325.03946" font-size="5px" x="1453.5372" id="txt-rs" class="rs">Serbia</text>
      <text y="349.48129" font-size="5px" x="1442.2161" id="txt-al" class="al">Albania</text>
      <text y="294.2002" font-size="5px" x="1439.0527" id="txt-hu" class="hu">Hungary</text>
      <text y="558.1062" font-size="10px" x="1529.4604" id="txt-sd" class="sd">Sudan</text>
      <text y="315.7666" font-size="5px" x="1423.9773" id="txt-ba" class="ba">
        <tspan x="1423.9773" y="315.7666">Bosnia and</tspan>
        <tspan x="1423.9773" y="322.43326">Herzegovina</tspan>
      </text>
      <text y="635.17072" font-size="10px" x="1530.708" id="txt-ss" class="ss">
        <tspan x="1530.708" y="635.17072">South</tspan>
        <tspan x="1530.708" y="648.50409">Sudan</tspan>
      </text>
      <text y="336.86984" font-size="5px" x="1459.1793" id="txt-mk" class="mk">
        <tspan x="1459.1793" y="336.86984">North</tspan>
        <tspan x="1459.1793" y="343.5365">Macedonia</tspan>
      </text>
    </g>
  </svg>
</template>
