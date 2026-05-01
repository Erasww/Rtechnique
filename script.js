// ── EXERCISE DATA ──
const exercises = [
  {
    id: 1, name: "Bench Press", category: "chest", difficulty: "intermediate",
    video: "SCVCLChPQFY",
    formCheck: "techniq.html",
    equipment: "Barbell", primaryMuscles: ["Chest"],
    secondaryMuscles: ["Front Shoulder", "Triceps"],
    desc: "A strong chest exercise. It helps your chest, arms, and shoulders.",
    steps: [
      "Lie flat on the bench. Hold the bar a little wider than your shoulders.",
      "Lift the bar from the rack and hold it over your chest.",
      "Lower the bar slowly to the middle of your chest.",
      "Touch your chest softly. Do not bounce the bar.",
      "Push the bar up until your arms are straight."
    ],
    tips: [
      "Keep your shoulders back on the bench.",
      "Keep both feet flat on the floor.",
      "Hold the bar tight.",
      "Move the bar in a smooth line."
    ],
    mistakes: [
      "Do not let your elbows go too wide.",
      "Do not bounce the bar on your chest.",
      "Do not lift your hips from the bench.",
      "Do not push more with one side."
    ]
  },
  {
    id: 2, name: "Deadlift", category: "back", difficulty: "advanced",
    video: "op9kVnSso6Q",
    equipment: "Barbell", primaryMuscles: ["Lower Back", "Glutes"],
    secondaryMuscles: ["Hamstrings", "Upper Back", "Forearms"],
    desc: "A full body strength move. It trains your back, legs, and grip.",
    steps: [
      "Stand with your feet under your hips. Keep the bar close to your shins.",
      "Bend at your hips. Hold the bar just outside your legs.",
      "Take a deep breath. Keep your chest up and back straight.",
      "Push the floor away and lift the bar.",
      "Stand tall at the top. Squeeze your glutes.",
      "Lower the bar slowly and get ready for the next rep."
    ],
    tips: [
      "Think about pushing with your legs.",
      "Keep the bar close to your body.",
      "Keep your stomach tight.",
      "Start light and learn the form first."
    ],
    mistakes: [
      "Do not round your lower back.",
      "Do not let the bar move away from you.",
      "Do not pull the bar with a fast jerk.",
      "Do not look too high."
    ]
  },
  {
    id: 3, name: "Back Squat", category: "legs", difficulty: "advanced",
    video: "ultWZbUMPL8",
    equipment: "Barbell", primaryMuscles: ["Front Thighs", "Glutes"],
    secondaryMuscles: ["Hamstrings", "Lower Back", "Core"],
    desc: "A key leg exercise. It helps build strong legs and glutes.",
    steps: [
      "Put the bar on your upper back. Stand with feet shoulder-width.",
      "Point your toes a little out. Take a deep breath.",
      "Bend your knees and hips at the same time.",
      "Go down as low as you can with good form.",
      "Push through your whole foot and stand up."
    ],
    tips: [
      "Keep your knees in line with your toes.",
      "Keep your chest up.",
      "Keep your heels on the floor.",
      "Move slowly at the bottom."
    ],
    mistakes: [
      "Do not let your knees fall in.",
      "Do not lean too far forward.",
      "Do not stop too high if you can go lower safely.",
      "Do not rise onto your toes."
    ]
  },
  {
    id: 4, name: "Overhead Press", category: "shoulders", difficulty: "intermediate",
    video: "2yjwXTZQDDI",
    equipment: "Barbell", primaryMuscles: ["Front Shoulder", "Side Shoulder"],
    secondaryMuscles: ["Triceps", "Upper Back", "Core"],
    desc: "A shoulder exercise. It also trains your arms and core.",
    steps: [
      "Take the bar at upper chest height. Hold it just wider than your shoulders.",
      "Keep your elbows a little in front of the bar.",
      "Tighten your core and glutes.",
      "Press the bar over your head.",
      "Lower the bar slowly to your chest."
    ],
    tips: [
      "Move your head back a little as the bar goes up.",
      "Keep your body tight.",
      "Push your elbows up.",
      "Keep your wrists straight."
    ],
    mistakes: [
      "Do not arch your lower back too much.",
      "Do not let the bar move forward.",
      "Do not use your legs if this is a strict press.",
      "Do not hold the bar too wide."
    ]
  },
  {
    id: 5, name: "Pull-Up", category: "back", difficulty: "intermediate",
    video: "eGo4IYlbE5g",
    equipment: "Pull-Up Bar", primaryMuscles: ["Back"],
    secondaryMuscles: ["Biceps", "Upper Back", "Rear Shoulder"],
    desc: "A bodyweight back exercise. It helps your back and arms.",
    steps: [
      "Hang from the bar with hands a little wider than shoulders.",
      "Pull your shoulders down.",
      "Pull your chest up toward the bar.",
      "Get your chin over the bar.",
      "Lower your body slowly until your arms are straight."
    ],
    tips: [
      "Think about pulling your elbows down.",
      "Keep your core tight.",
      "Use a band if pull-ups are hard.",
      "Lower slowly for better control."
    ],
    mistakes: [
      "Do not swing your body.",
      "Do not stop before your arms are straight.",
      "Do not shrug your shoulders up.",
      "Do not rush the reps."
    ]
  },
  {
    id: 6, name: "Romanian Deadlift", category: "legs", difficulty: "intermediate",
    video: "JCXUYuzwNrM",
    equipment: "Barbell", primaryMuscles: ["Hamstrings", "Glutes"],
    secondaryMuscles: ["Lower Back", "Forearms"],
    desc: "A good move for hamstrings and glutes. It also trains your back.",
    steps: [
      "Hold the bar at hip level. Stand with feet under your hips.",
      "Push your hips back. Keep a small bend in your knees.",
      "Keep the bar close to your legs.",
      "Go down until you feel a stretch in your hamstrings.",
      "Push your hips forward and stand tall."
    ],
    tips: [
      "This is a hip move, not a squat.",
      "Keep your back straight.",
      "Feel the stretch, but do not force it.",
      "Keep your knees slightly bent."
    ],
    mistakes: [
      "Do not bend your knees too much.",
      "Do not let the bar move away.",
      "Do not round your lower back.",
      "Do not use heavy weight too soon."
    ]
  },
  {
    id: 7, name: "Dumbbell Rows", category: "back", difficulty: "beginner",
    video: "roCP6wCXPqo",
    equipment: "Dumbbell", primaryMuscles: ["Back", "Upper Back"],
    secondaryMuscles: ["Biceps", "Rear Shoulder", "Upper Back"],
    desc: "A back exercise with one arm. It helps both sides get strong.",
    steps: [
      "Put one knee and one hand on a bench.",
      "Keep your back flat.",
      "Hold the dumbbell with your free hand.",
      "Pull your elbow back toward your hip.",
      "Lower the dumbbell slowly."
    ],
    tips: [
      "Keep your elbow close to your body.",
      "Keep your chest facing the floor.",
      "Squeeze your back at the top.",
      "Use a weight you can control."
    ],
    mistakes: [
      "Do not curl the weight with your arm only.",
      "Do not shrug your shoulder.",
      "Do not twist your body.",
      "Do not rush the reps."
    ]
  },
  {
    id: 8, name: "Lateral Raises", category: "shoulders", difficulty: "beginner",
    video: "3VcKaXpzqRo",
    formCheck: "lateral_raises.html",
    equipment: "Dumbbell", primaryMuscles: ["Side Shoulder"],
    secondaryMuscles: ["Front Shoulder", "Small Shoulder Muscle"],
    desc: "A shoulder exercise. Use light weight and good control.",
    steps: [
      "Stand with dumbbells at your sides.",
      "Keep a small bend in your elbows.",
      "Lift your arms out to the sides.",
      "Stop at shoulder height.",
      "Lower the dumbbells slowly."
    ],
    tips: [
      "Lead with your elbows, not your hands.",
      "Use light weight.",
      "Lean forward a little.",
      "Move slowly."
    ],
    mistakes: [
      "Do not shrug your shoulders.",
      "Do not swing the weights.",
      "Do not lift above shoulder height.",
      "Do not lock your elbows."
    ]
  },
  {
    id: 9, name: "Barbell Curl", category: "arms", difficulty: "beginner",
    video: "kwG2ipFRgfo",
    formCheck: "barbell_curl.html",
    equipment: "Barbell", primaryMuscles: ["Biceps"],
    secondaryMuscles: ["Forearms", "Lower Arm"],
    desc: "A simple arm exercise. It helps build your biceps.",
    steps: [
      "Stand and hold the bar with palms up.",
      "Keep your elbows close to your sides.",
      "Curl the bar up toward your chest.",
      "Squeeze your biceps at the top.",
      "Lower the bar slowly."
    ],
    tips: [
      "Keep your elbows still.",
      "Use a slow lower.",
      "Keep your body still.",
      "Use an EZ bar if your wrists hurt."
    ],
    mistakes: [
      "Do not swing your body.",
      "Do not move your elbows forward.",
      "Do not stop halfway down.",
      "Do not hold the bar too wide or too narrow."
    ]
  },
  {
    id: 10, name: "Tricep Dips", category: "arms", difficulty: "intermediate",
    video: "2z8JmcrW-As",
    equipment: "Parallel Bars", primaryMuscles: ["Triceps"],
    secondaryMuscles: ["Front Shoulder", "Chest", "Core"],
    desc: "A bodyweight arm exercise. It trains your triceps and chest.",
    steps: [
      "Hold yourself on the parallel bars.",
      "Bend your elbows and lower your body.",
      "Keep your elbows pointing back.",
      "Go down as low as you can safely.",
      "Push back up until your arms are straight."
    ],
    tips: [
      "Lean forward a little for more chest.",
      "Stay more upright for more triceps.",
      "Use the full range if it feels safe.",
      "Use a band if dips are hard."
    ],
    mistakes: [
      "Do not stop too high.",
      "Do not let elbows go wide.",
      "Do not lean too far forward.",
      "Do not rush the way down."
    ]
  },
  {
    id: 11, name: "Plank", category: "core", difficulty: "beginner",
    video: "pSHjTRCQxIw",
    equipment: "Body weight", primaryMuscles: ["Abs", "Deep Core"],
    secondaryMuscles: ["Side Abs", "Lower Back", "Glutes"],
    desc: "A simple core exercise. It helps you keep your body strong and still.",
    steps: [
      "Put your elbows under your shoulders.",
      "Keep your forearms on the floor.",
      "Make a straight line from head to heels.",
      "Squeeze your glutes and core.",
      "Breathe slowly while you hold."
    ],
    tips: [
      "Push the floor with your elbows.",
      "Keep your hips level.",
      "Stay tight from head to feet.",
      "Stop if your form breaks."
    ],
    mistakes: [
      "Do not let your hips drop.",
      "Do not lift your hips too high.",
      "Do not let your head hang down.",
      "Do not hold your breath."
    ]
  },
  {
    id: 12, name: "Incline Dumbbell Press", category: "chest", difficulty: "intermediate",
    video: "8iPEnn-ltC8",
    equipment: "Dumbbell", primaryMuscles: ["Upper Chest"],
    secondaryMuscles: ["Front Shoulder", "Triceps"],
    desc: "A chest exercise for the upper chest. It also trains shoulders and arms.",
    steps: [
      "Set the bench to a small incline.",
      "Sit down with the dumbbells on your thighs.",
      "Bring the dumbbells to chest level.",
      "Press the dumbbells up and a little together.",
      "Lower them slowly to your chest."
    ],
    tips: [
      "Use a low incline, not a very high one.",
      "Keep your shoulders back.",
      "Feel a small stretch at the bottom.",
      "Move both dumbbells at the same speed."
    ],
    mistakes: [
      "Do not set the bench too high.",
      "Do not let elbows go too wide.",
      "Do not move one dumbbell faster.",
      "Do not sit up during the set."
    ]
  }
];

// ── RENDER EXERCISE CARDS ──
const difficultyLabels = { beginner: 'easy', intermediate: 'medium', advanced: 'hard' };

function renderExercises(filter = 'all') {
  const grid = document.getElementById('exerciseGrid');
  const filtered = filter === 'all' ? exercises : exercises.filter(e => e.category === filter);
  grid.innerHTML = filtered.map(ex => `
    <div class="exercise-card fade-in" onclick="openModal(${ex.id})">
      <div>
        <span class="card-muscle">${ex.category}</span>
        <span class="card-difficulty diff-${ex.difficulty}">${difficultyLabels[ex.difficulty] || ex.difficulty}</span>
      </div>
      <h3 class="card-title">${ex.name}</h3>
      <p class="card-desc">${ex.desc}</p>
      <div class="card-muscles">
        ${ex.primaryMuscles.map(m => `<span class="muscle-tag">${m}</span>`).join('')}
      </div>
      <div class="card-cta">View Easy Guide</div>
    </div>
  `).join('');
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 50);
}

// ── FILTER BUTTONS ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderExercises(btn.dataset.filter);
  });
});

// ── MODAL ──
function openModal(id) {
  const ex = exercises.find(e => e.id === id);
  if (!ex) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-meta">
        <span class="card-muscle">${ex.category}</span>
        <span class="card-difficulty diff-${ex.difficulty}">${difficultyLabels[ex.difficulty] || ex.difficulty}</span>
      </div>
      <h2 class="modal-title">${ex.name}</h2>
      <p style="font-size:14px;color:var(--muted)">${ex.equipment} — <em style="color:var(--text)">${ex.desc}</em></p>
      ${ex.formCheck ? `
        <button class="modal-form-check" onclick="window.location.href='${ex.formCheck}'">
          Open Camera Form Check
        </button>
      ` : ''}
    </div>
    ${ex.video ? `
    <div class="modal-video-wrap">
      <div class="modal-video-label">▶ WATCH THE EXERCISE</div>
      <div class="modal-video-container">
        <iframe
          src="https://www.youtube.com/embed/${ex.video}?rel=0&modestbranding=1"
          title="${ex.name} tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>` : ''}
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-title">Muscles Used</div>
        <div class="muscles-breakdown">
          <div class="muscle-group-card">
            <div class="muscle-group-label">Main</div>
            ${ex.primaryMuscles.map(m => `<div class="muscle-group-name">${m}</div>`).join('')}
          </div>
          <div class="muscle-group-card">
            <div class="muscle-group-label">Other</div>
            ${ex.secondaryMuscles.map(m => `<div class="muscle-secondary">— ${m}</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Simple Steps</div>
        <ol class="steps-list">
          ${ex.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Tips</div>
        <div class="tips-grid">
          ${ex.tips.map(t => `<div class="tip-item">${t}</div>`).join('')}
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Mistakes to Avoid</div>
        <div class="common-mistakes">
          ${ex.mistakes.map(m => `<div class="mistake-item">${m}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  // Stop any playing video by clearing the iframe src temporarily
  const iframe = document.querySelector('#modalContent iframe');
  if (iframe) { iframe.src = iframe.src; }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// ── PLAN GENERATION ──
async function generatePlan() {
  const name = document.getElementById('userName').value.trim() || 'Athlete';
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const experience = document.getElementById('experience').value;
  const daysPerWeek = parseInt(document.getElementById('daysPerWeek').value);
  const goal = document.querySelector('input[name="goal"]:checked').value;

  if (!weight || !height || !age) {
    alert('Please fill in your weight, height, and age.');
    return;
  }

  const btn = document.getElementById('generateBtn');
  btn.disabled = true;
  document.getElementById('planPlaceholder').style.display = 'none';
  document.getElementById('planResult').classList.remove('visible');
  document.getElementById('loadingState').classList.add('visible');

  const bmi = (weight / ((height/100) ** 2)).toFixed(1);
  let bmrBase = gender === 'male'
    ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    : 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  const tdee = Math.round(bmrBase * 1.55);
  
  const goalLabels = { muscle: 'Build Muscle', fat_loss: 'Lose Fat', endurance: 'Get Fit' };

  const prompt = `You are a gym coach. Create a clear gym training plan. Use simple A2-B1 English. Use short sentences and common words.

ATHLETE PROFILE:
- Name: ${name}
- Weight: ${weight}kg, Height: ${height}cm, Age: ${age}
- Gender: ${gender}
- BMI: ${bmi}
- Estimated TDEE: ${tdee} kcal/day
- Experience: ${experience}
- Goal: ${goalLabels[goal]}
- Days/week: ${daysPerWeek}

Answer ONLY with a JSON object (no markdown, no backticks) with this exact structure:
{
  "bmi_category": "string",
  "weekly_calories": number,
  "protein_g": number,
  "sessions_per_week": number,
  "program_type": "string (e.g. Upper and Lower Plan)",
  "coach_note": "2 short simple sentences for the athlete",
  "weekly_plan": [
    {
      "day": "Monday",
      "focus": "e.g. Upper Body Push",
      "rest": false,
      "exercises": [
        {"name": "Bench Press", "sets": 4, "reps": "6-8", "rest_sec": 120, "note": "brief form cue"}
      ]
    }
  ]
}

Include all ${daysPerWeek} training days plus rest days to fill 7 days. Make the plan good for a ${experience} with the goal of ${goalLabels[goal]}. Notes must use easy A2-B1 words.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content.map(i => i.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const plan = JSON.parse(clean);
    renderPlan(name, weight, height, bmi, tdee, goal, goalLabels, plan);
  } catch(err) {
    // Fallback plan if API fails
    renderPlan(name, weight, height, bmi, tdee, goal, goalLabels, getFallbackPlan(experience, daysPerWeek, goal));
  }

  document.getElementById('loadingState').classList.remove('visible');
  btn.disabled = false;
}

function renderPlan(name, weight, height, bmi, tdee, goal, goalLabels, plan) {
  const calTarget = goal === 'muscle' ? tdee + 300 : goal === 'fat_loss' ? tdee - 400 : tdee;
  const html = `
    <div class="plan-header">
      <div class="plan-user-name">${name.toUpperCase()}</div>
      <div class="plan-meta-row">
        <span>${goalLabels[goal]}</span>
        <span>${weight}kg · ${height}cm · BMI ${bmi}</span>
        <span>${plan.program_type || 'Custom Plan'}</span>
      </div>
    </div>
    <div class="plan-stats-row">
      <div class="plan-stat">
        <div class="plan-stat-num">${calTarget.toLocaleString()}</div>
        <div class="plan-stat-label">Calories/day</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num">${plan.protein_g || Math.round(weight * 1.8)}g</div>
        <div class="plan-stat-label">Protein/day</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num">${plan.sessions_per_week || 4}</div>
        <div class="plan-stat-label">Workouts/week</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num">${bmi}</div>
        <div class="plan-stat-label">BMI · ${plan.bmi_category || ''}</div>
      </div>
    </div>
    <div class="week-plan">
      ${plan.weekly_plan.map(day => `
        <div class="week-day">
          <div class="day-header" onclick="toggleDay(this)">
            <div>
              <div class="day-name">${day.day.toUpperCase()}</div>
              <div class="day-focus">${day.rest ? 'Rest Day' : day.focus}</div>
            </div>
            <div class="day-toggle">+</div>
          </div>
          <div class="day-exercises">
            ${day.rest ? `<p style="padding:16px 0;font-size:14px;color:var(--muted)">Walk for 20-30 minutes or stretch. Sleep 7-9 hours.</p>` :
              (day.exercises || []).map(ex => `
                <div class="day-exercise-item">
                  <div>
                    <div class="day-ex-name">${ex.name}</div>
                    ${ex.note ? `<div style="font-size:12px;color:var(--muted);margin-top:2px">${ex.note}</div>` : ''}
                  </div>
                  <div class="day-ex-sets">${ex.sets} × ${ex.reps} · ${ex.rest_sec}s rest</div>
                </div>
              `).join('')
            }
          </div>
        </div>
      `).join('')}
    </div>
    <div class="ai-note">
      <strong>Coach Note -</strong> ${plan.coach_note || `This plan is made for your body and your ${goalLabels[goal]} goal. Check your progress each week and add a little weight when it feels easy.`}
    </div>
  `;
  const result = document.getElementById('planResult');
  result.innerHTML = html;
  result.classList.add('visible');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleDay(header) {
  const exDiv = header.nextElementSibling;
  const toggle = header.querySelector('.day-toggle');
  exDiv.classList.toggle('open');
  toggle.classList.toggle('open');
}

function getFallbackPlan(experience, days, goal) {
  const splits = {
    3: [
      { day: 'Monday', focus: 'Full Body A', rest: false, exercises: [
        {name:'Squat',sets:4,reps:'6-8',rest_sec:180,note:'Push through your whole foot'},
        {name:'Bench Press',sets:4,reps:'6-8',rest_sec:120,note:'Keep shoulders back'},
        {name:'Dumbbell Rows',sets:3,reps:'8-10',rest_sec:90,note:'Elbow to hip, not ceiling'},
        {name:'Overhead Press',sets:3,reps:'8-10',rest_sec:90,note:'Keep your core tight'},
      ]},
      { day: 'Tuesday', focus: 'Rest', rest: true },
      { day: 'Wednesday', focus: 'Rest', rest: true },
      { day: 'Thursday', focus: 'Full Body B', rest: false, exercises: [
        {name:'Deadlift',sets:4,reps:'4-6',rest_sec:180,note:'Bar stays on shins'},
        {name:'Incline Dumbbell Press',sets:3,reps:'8-12',rest_sec:90,note:'30° angle only'},
        {name:'Pull-Up',sets:3,reps:'Max',rest_sec:120,note:'Straight arms at the bottom'},
        {name:'Lateral Raises',sets:4,reps:'15-20',rest_sec:60,note:'Lead with elbows'},
      ]},
      { day: 'Friday', focus: 'Rest', rest: true },
      { day: 'Saturday', focus: 'Full Body C', rest: false, exercises: [
        {name:'Romanian Deadlift',sets:4,reps:'10-12',rest_sec:90,note:'Hip hinge, not squat'},
        {name:'Barbell Curl',sets:3,reps:'10-12',rest_sec:60,note:'Elbows pinned to sides'},
        {name:'Tricep Dips',sets:3,reps:'8-12',rest_sec:90,note:'Full depth'},
        {name:'Plank',sets:3,reps:'45s',rest_sec:60,note:'Keep hips level'},
      ]},
      { day: 'Sunday', focus: 'Rest', rest: true },
    ]
  };
  return {
    bmi_category: 'Normal', weekly_calories: 2400, protein_g: 160, sessions_per_week: days,
    program_type: days <= 3 ? 'Full Body Plan' : 'Upper and Lower Plan',
    coach_note: `This plan fits your ${experience} level and your ${goal.replace('_',' ')} goal. Use good form before heavy weight. Write down your lifts each week.`,
    weekly_plan: splits[3]
  };
}

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── INIT ──
renderExercises();
