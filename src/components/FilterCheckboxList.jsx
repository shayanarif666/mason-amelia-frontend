// // // FilterCheckboxList.jsx
// // import React, { useMemo, useState, useEffect } from "react";
// // import Slider from "react-slider";

// // // Left→Right order matters for discrete sliders
// // const AIRFRAME_OPTIONS = ["2500", "5000", "7500"];
// // const ENGINE_OPTIONS = ["2665", "3517/3421", "220", "3710", "380/380"];

// // export default function FilterCheckboxList({
// //   selected,
// //   setSelected,
// //   range,
// //   setRange,
// //   minPrice,
// //   maxPrice,
// // }) {
// //   // helpers
// //   const stripGroup = (prev, group) => prev.filter((x) => !group.includes(x));

// //   // defaults (index-based)
// //   const defaultAirframe = [0, AIRFRAME_OPTIONS.length - 1];
// //   const defaultEngine = [0, ENGINE_OPTIONS.length - 1];

// //   // derive initial ranges from selected[]
// //   const initialAirframe = useMemo(() => {
// //     const picked = AIRFRAME_OPTIONS.map((v, i) => (selected.includes(v) ? i : null)).filter((i) => i !== null);
// //     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultAirframe;
// //   }, [selected]);

// //   const initialEngine = useMemo(() => {
// //     const picked = ENGINE_OPTIONS.map((v, i) => (selected.includes(v) ? i : null)).filter((i) => i !== null);
// //     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultEngine;
// //   }, [selected]);

// //   // local state for discrete sliders
// //   const [airframeIdx, setAirframeIdx] = useState(initialAirframe);
// //   const [engineIdx, setEngineIdx] = useState(initialEngine);

// //   useEffect(() => setAirframeIdx(initialAirframe), [initialAirframe]);
// //   useEffect(() => setEngineIdx(initialEngine), [initialEngine]);

// //   // apply discrete index range to selected[]
// //   const applyRange = (group, idxRange) => {
// //     const [start, end] = idxRange;
// //     const values = group.slice(start, end + 1);
// //     setSelected((prev) => [...stripGroup(prev, group), ...values]);
// //   };

// //   const onAirframeChange = (val) => {
// //     const next = Array.isArray(val) ? val : [val, val];
// //     setAirframeIdx(next);
// //     applyRange(AIRFRAME_OPTIONS, next);
// //   };
// //   const onEngineChange = (val) => {
// //     const next = Array.isArray(val) ? val : [val, val];
// //     setEngineIdx(next);
// //     applyRange(ENGINE_OPTIONS, next);
// //   };

// //   // price slider guard
// //   const safeRange =
// //     Array.isArray(range) && range.length === 2 ? range : [minPrice, maxPrice];

// //   const clearAll = () => {
// //     setSelected((prev) => prev.filter((x) => !AIRFRAME_OPTIONS.includes(x) && !ENGINE_OPTIONS.includes(x)));
// //     setAirframeIdx(defaultAirframe);
// //     setEngineIdx(defaultEngine);
// //   };

// //   return (
// //     <div className="p-6 rounded-2xl border border-[#ffffff48]">
// //       <div className="flex justify-between mb-4">
// //         <h3 className="text-white font-medium">Filter Options</h3>
// //         <button onClick={clearAll} className="text-white font-medium text-xs hover:text-tertiary_color">
// //           Clear All
// //         </button>
// //       </div>

// //       {/* Airframes — range slider (discrete) */}
// //       <div className="mb-8">
// //         <h3 className="text-sm font-semibold text-white mb-3">Airframes</h3>
// //         <Slider
// //           className="slider"
// //           min={0}
// //           max={AIRFRAME_OPTIONS.length - 1}
// //           step={1}
// //           value={airframeIdx}
// //           onChange={onAirframeChange}
// //           renderTrack={(props, state) => (
// //             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
// //           )}
// //           renderThumb={(props, state) => (
// //             <div {...props} className="slider-thumb relative">
// //               {/* <span className="absolute -top-6 text-[11px] text-white/80">
// //                 {AIRFRAME_OPTIONS[state.valueNow]}
// //               </span> */}
// //             </div>
// //           )}
// //         />
// //         <div className="flex justify-between mt-3 text-[.6rem] xl:text-base text-gray-300">
// //           {AIRFRAME_OPTIONS.map((lab) => (
// //             <span key={lab}>{lab}</span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Engine — range slider (discrete) */}
// //       <div className="mb-8">
// //         <h3 className="text-sm font-semibold text-white mb-3">Engine</h3>
// //         <Slider
// //           className="slider"
// //           min={0}
// //           max={ENGINE_OPTIONS.length - 1}
// //           step={1}
// //           value={engineIdx}
// //           onChange={onEngineChange}
// //           renderTrack={(props, state) => (
// //             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
// //           )}
// //           renderThumb={(props, state) => (
// //             <div {...props} className="slider-thumb relative">
// //               {/* <span className="absolute -top-6 text-[11px] text-white/80">
// //                 {ENGINE_OPTIONS[state.valueNow]}
// //               </span> */}
// //             </div>
// //           )}
// //         />
// //         <div className="flex justify-between mt-3 text-[12px] text-gray-300">
// //           {ENGINE_OPTIONS.map((lab, i) => (
// //             <span key={lab} className="text-[.6rem] xl:text-base">{lab}{i === ENGINE_OPTIONS.length - 1 ? "" : "-"}</span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Price Range — as-is */}
// //       <div className="pt-2">
// //         <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>
// //         <div className="mb-2 text-gray-300 text-[.6rem] xl:text-sm">
// //           ${safeRange[0]?.toLocaleString()} – ${safeRange[1]?.toLocaleString()}
// //         </div>
// //         <Slider
// //           className="slider"
// //           value={safeRange}
// //           onChange={setRange}
// //           min={minPrice}
// //           max={maxPrice}
// //           step={1000}
// //           renderTrack={(props, state) => (
// //             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
// //           )}
// //           renderThumb={(props) => <div {...props} className="slider-thumb" />}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// // FilterCheckboxList.jsx
// import React, { useMemo, useState, useEffect } from "react";
// import Slider from "react-slider";
// import CheckBoxGroup from "./CheckBoxGroup";

// // Discrete sliders (order matters)
// const AIRFRAME_OPTIONS = ["2500", "5000", "7500"];
// const ENGINE_OPTIONS   = ["2665", "3517/3421", "220", "3710", "380/380"];

// // NEW: Aircraft manufacturer checkboxes
// const AIRCRAFT_OPTIONS = ["Cirrus", "Cessna", "Piper", "TBM"];

// export default function FilterCheckboxList({
//   selected,
//   setSelected,
//   range,
//   setRange,
//   minPrice,
//   maxPrice,
// }) {
//   // helpers
//   const stripGroup = (prev, group) => prev.filter((x) => !group.includes(x));

//   // defaults (index-based)
//   const defaultAirframe = [0, AIRFRAME_OPTIONS.length - 1];
//   const defaultEngine   = [0, ENGINE_OPTIONS.length - 1];

//   // derive initial ranges from selected[]
//   const initialAirframe = useMemo(() => {
//     const picked = AIRFRAME_OPTIONS.map((v, i) => (selected.includes(v) ? i : null)).filter((i) => i !== null);
//     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultAirframe;
//   }, [selected]);

//   const initialEngine = useMemo(() => {
//     const picked = ENGINE_OPTIONS.map((v, i) => (selected.includes(v) ? i : null)).filter((i) => i !== null);
//     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultEngine;
//   }, [selected]);

//   // local state for discrete sliders
//   const [airframeIdx, setAirframeIdx] = useState(initialAirframe);
//   const [engineIdx, setEngineIdx]     = useState(initialEngine);

//   useEffect(() => setAirframeIdx(initialAirframe), [initialAirframe]);
//   useEffect(() => setEngineIdx(initialEngine), [initialEngine]);

//   // apply discrete index range to selected[]
//   const applyRange = (group, idxRange) => {
//     const [start, end] = idxRange;
//     const values = group.slice(start, end + 1);
//     setSelected((prev) => [...stripGroup(prev, group), ...values]);
//   };

//   const onAirframeChange = (val) => {
//     const next = Array.isArray(val) ? val : [val, val];
//     setAirframeIdx(next);
//     applyRange(AIRFRAME_OPTIONS, next);
//   };

//   const onEngineChange = (val) => {
//     const next = Array.isArray(val) ? val : [val, val];
//     setEngineIdx(next);
//     applyRange(ENGINE_OPTIONS, next);
//   };

//   // checkbox toggle handler for AIRCRAFT_OPTIONS
//   const toggleAircraft = (value) => {
//     setSelected((prev) =>
//       prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
//     );
//   };

//   // price slider guard
//   const safeRange =
//     Array.isArray(range) && range.length === 2 ? range : [minPrice, maxPrice];

//   const clearAll = () => {
//     setSelected((prev) =>
//       prev.filter(
//         (x) =>
//           !AIRFRAME_OPTIONS.includes(x) &&
//           !ENGINE_OPTIONS.includes(x) &&
//           !AIRCRAFT_OPTIONS.includes(x)
//       )
//     );
//     setAirframeIdx(defaultAirframe);
//     setEngineIdx(defaultEngine);
//   };

//   return (
//     <div className="p-6 rounded-2xl border border-[#ffffff48]">
//       <div className="flex justify-between mb-4">
//         <h3 className="text-white font-medium">Filter Options</h3>
//         <button onClick={clearAll} className="text-white font-medium text-xs hover:text-tertiary_color">
//           Clear All
//         </button>
//       </div>

//       {/* Aircraft (checkbox group) */}
//       <CheckBoxGroup
//         title="Aircraft"
//         items={AIRCRAFT_OPTIONS}
//         selected={selected}
//         onChange={toggleAircraft}
//       />

//       {/* Airframes — range slider (discrete) */}
//       <div className="mb-8 mt-6">
//         <h3 className="text-sm font-semibold text-white mb-3">Airframes</h3>
//         <Slider
//           className="slider"
//           min={0}
//           max={AIRFRAME_OPTIONS.length - 1}
//           step={1}
//           value={airframeIdx}
//           onChange={onAirframeChange}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
//         />
//         <div className="flex justify-between mt-3 text-[.6rem] xl:text-base text-gray-300">
//           {AIRFRAME_OPTIONS.map((lab) => (
//             <span key={lab}>{lab}</span>
//           ))}
//         </div>
//       </div>

//       {/* Engine — range slider (discrete) */}
//       <div className="mb-8">
//         <h3 className="text-sm font-semibold text-white mb-3">Engine</h3>
//         <Slider
//           className="slider"
//           min={0}
//           max={ENGINE_OPTIONS.length - 1}
//           step={1}
//           value={engineIdx}
//           onChange={onEngineChange}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
//         />
//         <div className="flex justify-between mt-3 text-gray-300">
//           {ENGINE_OPTIONS.map((lab, i) => (
//             <span key={lab} className="text-[.6rem] xl:text-base">
//               {lab}{i === ENGINE_OPTIONS.length - 1 ? "" : "-"}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Price Range — as-is */}
//       <div className="pt-2">
//         <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>
//         <div className="mb-2 text-gray-300 text-[.6rem] xl:text-sm">
//           ${safeRange[0]?.toLocaleString()} – ${safeRange[1]?.toLocaleString()}
//         </div>
//         <Slider
//           className="slider"
//           value={safeRange}
//           onChange={setRange}
//           min={minPrice}
//           max={maxPrice}
//           step={1000}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb" />}
//         />
//       </div>
//     </div>
//   );
// }

// // FilterCheckboxList.jsx
// import React, { useMemo, useState, useEffect } from "react";
// import Slider from "react-slider";
// import CheckBoxGroup from "./CheckBoxGroup";

// // Discrete sliders (order matters)
// const AIRFRAME_OPTIONS = ["2500", "5000", "7500"];
// const ENGINE_OPTIONS   = ["2665", "3517/3421", "220", "3710", "380/380"];

// // ✅ keep these lowercase to match your Listing.jsx comparisons
// const AIRCRAFT_OPTIONS = ["cirrus", "cessna", "piper", "tbm"];

// export default function FilterCheckboxList({
//   selected,
//   setSelected,
//   range,
//   setRange,
//   minPrice,
//   maxPrice,
// }) {
//   const stripGroup = (prev, group) => prev.filter((x) => !group.includes(x));

//   const defaultAirframe = [0, AIRFRAME_OPTIONS.length - 1];
//   const defaultEngine   = [0, ENGINE_OPTIONS.length - 1];

//   const initialAirframe = useMemo(() => {
//     const picked = AIRFRAME_OPTIONS.map((v, i) => (selected.includes(v) ? i : null))
//       .filter((i) => i !== null);
//     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultAirframe;
//   }, [selected]);

//   const initialEngine = useMemo(() => {
//     const picked = ENGINE_OPTIONS.map((v, i) => (selected.includes(v) ? i : null))
//       .filter((i) => i !== null);
//     return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultEngine;
//   }, [selected]);

//   const [airframeIdx, setAirframeIdx] = useState(initialAirframe);
//   const [engineIdx, setEngineIdx]     = useState(initialEngine);

//   useEffect(() => setAirframeIdx(initialAirframe), [initialAirframe]);
//   useEffect(() => setEngineIdx(initialEngine), [initialEngine]);

//   const applyRange = (group, idxRange) => {
//     const [start, end] = idxRange;
//     const values = group.slice(start, end + 1);
//     setSelected((prev) => [...stripGroup(prev, group), ...values]);
//   };

//   const onAirframeChange = (val) => {
//     const next = Array.isArray(val) ? val : [val, val];
//     setAirframeIdx(next);
//     applyRange(AIRFRAME_OPTIONS, next);
//   };

//   const onEngineChange = (val) => {
//     const next = Array.isArray(val) ? val : [val, val];
//     setEngineIdx(next);
//     applyRange(ENGINE_OPTIONS, next);
//   };

//   // ✅ toggle stores lowercase strings in `selected`
//   const toggleAircraft = (value) => {
//     const slug = String(value).toLowerCase();
//     setSelected((prev) =>
//       prev.includes(slug) ? prev.filter((i) => i !== slug) : [...prev, slug]
//     );
//   };

//   const safeRange = Array.isArray(range) && range.length === 2 ? range : [minPrice, maxPrice];

//   const clearAll = () => {
//     setSelected((prev) =>
//       prev.filter(
//         (x) =>
//           !AIRFRAME_OPTIONS.includes(x) &&
//           !ENGINE_OPTIONS.includes(x) &&
//           !AIRCRAFT_OPTIONS.includes(x)
//       )
//     );
//     setAirframeIdx(defaultAirframe);
//     setEngineIdx(defaultEngine);
//   };

//   return (
//     <div className="p-6 rounded-2xl border border-[#ffffff48]">
//       <div className="flex justify-between mb-4">
//         <h3 className="text-white font-medium">Filter Options</h3>
//         <button onClick={clearAll} className="text-white font-medium text-xs hover:text-tertiary_color">
//           Clear All
//         </button>
//       </div>

//       {/* Aircraft (checkbox group) */}
//       {/* If you want title-cased labels, add "capitalize" class inside CheckBoxGroup */}
//       <CheckBoxGroup
//         title="Aircraft"
//         items={AIRCRAFT_OPTIONS}          // 👈 strings only
//         selected={selected}
//         onChange={toggleAircraft}         // ensures lowercase storage
//       />

//       {/* Airframes — range slider (discrete) */}
//       <div className="mb-8 mt-6">
//         <h3 className="text-sm font-semibold text-white mb-3">Airframes</h3>
//         <Slider
//           className="slider"
//           min={0}
//           max={AIRFRAME_OPTIONS.length - 1}
//           step={1}
//           value={airframeIdx}
//           onChange={onAirframeChange}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
//         />
//         <div className="flex justify-between mt-3 text-[.6rem] xl:text-base text-gray-300">
//           {AIRFRAME_OPTIONS.map((lab) => (
//             <span key={lab}>{lab}</span>
//           ))}
//         </div>
//       </div>

//       {/* Engine — range slider (discrete) */}
//       <div className="mb-8">
//         <h3 className="text-sm font-semibold text-white mb-3">Engine</h3>
//         <Slider
//           className="slider"
//           min={0}
//           max={ENGINE_OPTIONS.length - 1}
//           step={1}
//           value={engineIdx}
//           onChange={onEngineChange}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
//         />
//         <div className="flex justify-between mt-3 text-gray-300">
//           {ENGINE_OPTIONS.map((lab, i) => (
//             <span key={lab} className="text-[.6rem] xl:text-base">
//               {lab}{i === ENGINE_OPTIONS.length - 1 ? "" : "-"}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Price Range */}
//       <div className="pt-2">
//         <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>
//         <div className="mb-2 text-gray-300 text-[.6rem] xl:text-sm">
//           ${safeRange[0]?.toLocaleString()} – ${safeRange[1]?.toLocaleString()}
//         </div>
//         <Slider
//           className="slider"
//           value={safeRange}
//           onChange={setRange}
//           min={minPrice}
//           max={maxPrice}
//           step={1000}
//           renderTrack={(props, state) => (
//             <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
//           )}
//           renderThumb={(props) => <div {...props} className="slider-thumb" />}
//         />
//       </div>
//     </div>
//   );
// }





// FilterCheckboxList.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import Slider from "react-slider";
import CheckBoxGroup from "./CheckBoxGroup";

// Discrete sliders (order matters)
const AIRFRAME_OPTIONS = ["2500", "5000", "7500"];
const ENGINE_OPTIONS   = ["2665", "3517/3421", "220", "3710", "380/380"];
const AIRCRAFT_OPTIONS = ["cirrus", "cessna", "piper", "tbm"];

// Tiny debounce helper
const useDebouncedCallback = (cb, delay = 120) => {
  const t = useRef();
  return (...args) => {
    clearTimeout(t.current);
    t.current = setTimeout(() => cb(...args), delay);
  };
};

export default function FilterCheckboxList({
  selected,
  setSelected,
  range,
  setRange,
  minPrice,
  maxPrice,
}) {
  const stripGroup = (prev, group) => prev.filter((x) => !group.includes(x));

  const defaultAirframe = [0, AIRFRAME_OPTIONS.length - 1];
  const defaultEngine   = [0, ENGINE_OPTIONS.length - 1];

  const initialAirframe = useMemo(() => {
    const picked = AIRFRAME_OPTIONS.map((v, i) => (selected.includes(v) ? i : null))
      .filter((i) => i !== null);
    return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultAirframe;
  }, [selected]);

  const initialEngine = useMemo(() => {
    const picked = ENGINE_OPTIONS.map((v, i) => (selected.includes(v) ? i : null))
      .filter((i) => i !== null);
    return picked.length ? [Math.min(...picked), Math.max(...picked)] : defaultEngine;
  }, [selected]);

  const [airframeIdx, setAirframeIdx] = useState(initialAirframe);
  const [engineIdx, setEngineIdx]     = useState(initialEngine);

  useEffect(() => setAirframeIdx(initialAirframe), [initialAirframe]);
  useEffect(() => setEngineIdx(initialEngine), [initialEngine]);

  const applyRange = (group, idxRange) => {
    const [start, end] = idxRange;
    const values = group.slice(start, end + 1);
    setSelected((prev) => [...stripGroup(prev, group), ...values]);
  };

  const onAirframeChange = (val) => {
    const next = Array.isArray(val) ? val : [val, val];
    setAirframeIdx(next);
    applyRange(AIRFRAME_OPTIONS, next);
  };

  const onEngineChange = (val) => {
    const next = Array.isArray(val) ? val : [val, val];
    setEngineIdx(next);
    applyRange(ENGINE_OPTIONS, next);
  };

  // Lowercase storage for aircraft slugs
  const toggleAircraft = (value) => {
    const slug = String(value).toLowerCase();
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((i) => i !== slug) : [...prev, slug]
    );
  };

  const safeRange = Array.isArray(range) && range.length === 2 ? range : [minPrice, maxPrice];
  const debouncedSetRange = useDebouncedCallback(setRange, 120);

  const clearAll = () => {
    setSelected((prev) =>
      prev.filter(
        (x) =>
          !AIRFRAME_OPTIONS.includes(x) &&
          !ENGINE_OPTIONS.includes(x) &&
          !AIRCRAFT_OPTIONS.includes(x)
      )
    );
    setAirframeIdx(defaultAirframe);
    setEngineIdx(defaultEngine);
  };

  return (
    <div className="p-6 rounded-2xl border border-[#ffffff48]">
      <div className="flex justify-between mb-4">
        <h3 className="text-white font-medium">Filter Options</h3>
        <button onClick={clearAll} className="text-white font-medium text-xs hover:text-tertiary_color">
          Clear All
        </button>
      </div>

      {/* Aircraft (checkbox group) */}
      <CheckBoxGroup
        title="Aircraft"
        items={AIRCRAFT_OPTIONS}
        selected={selected}
        onChange={toggleAircraft}
      />

      {/* Airframes — discrete range */}
      <div className="mb-8 mt-6">
        <h3 className="text-sm font-semibold text-white mb-3">Airframes</h3>
        <Slider
          className="slider"
          min={0}
          max={AIRFRAME_OPTIONS.length - 1}
          step={1}
          value={airframeIdx}
          onChange={onAirframeChange}
          renderTrack={(props, state) => (
            <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
          )}
          renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
        />
        <div className="flex justify-between mt-3 text-[.6rem] xl:text-base text-gray-300">
          {AIRFRAME_OPTIONS.map((lab) => (
            <span key={lab}>{lab}</span>
          ))}
        </div>
      </div>

      {/* Engine — discrete range */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white mb-3">Engine</h3>
        <Slider
          className="slider"
          min={0}
          max={ENGINE_OPTIONS.length - 1}
          step={1}
          value={engineIdx}
          onChange={onEngineChange}
          renderTrack={(props, state) => (
            <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
          )}
          renderThumb={(props) => <div {...props} className="slider-thumb relative" />}
        />
        <div className="flex justify-between mt-3 text-gray-300">
          {ENGINE_OPTIONS.map((lab, i) => (
            <span key={lab} className="text-[.6rem] xl:text-base">
              {lab}{i === ENGINE_OPTIONS.length - 1 ? "" : "-"}
            </span>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pt-2">
        <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>
        <div className="mb-2 text-gray-300 text-[.6rem] xl:text-sm">
          ${safeRange[0]?.toLocaleString()} – ${safeRange[1]?.toLocaleString()}
        </div>
        <Slider
          className="slider"
          value={safeRange}
          onChange={debouncedSetRange}
          min={minPrice}
          max={maxPrice}
          step={1000}
          renderTrack={(props, state) => (
            <div {...props} className={`slider-track ${state.index === 0 ? "track-0" : "track-1"}`} />
          )}
          renderThumb={(props) => <div {...props} className="slider-thumb" />}
        />
      </div>
    </div>
  );
}

