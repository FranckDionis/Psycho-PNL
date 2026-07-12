/* =====================================================================
   PSYCHO & PNL — CONTENU
   Tout le contenu de l'application est ici. Pour enrichir :
   - un mot de vocabulaire : ajoute une ligne dans VOCAB
   - une définition : ajoute un objet dans GLOSSARY
   - un cours : ajoute/modifie un objet dans COURANTS, THEORICIENS, etc.
   Les fiches de cours acceptent du HTML simple :
     <h4>Sous-titre</h4>, <p>paragraphe</p>, <ul><li>…</li></ul>,
     <span class="kw">mot clé</span>,
     <div class="callout"><span class="ct">Exemple</span> …</div>
     <div class="callout ok"><span class="ct">À retenir</span> …</div>
     <div class="callout warn"><span class="ct">Attention</span> …</div>
   ===================================================================== */
const APP = { title:"Psycho & PNL", subtitle:"Réviser, apprendre et se tester — licence de psychologie" };

/* ------------------------- VOCABULAIRE (165) ------------------------- */
const VOCAB = [
  // Concepts
  {en:"behaviour", fr:"comportement", cat:"Concepts"},
  {en:"mind", fr:"esprit", cat:"Concepts"},
  {en:"cognition", fr:"cognition", cat:"Concepts"},
  {en:"perception", fr:"perception", cat:"Concepts"},
  {en:"awareness", fr:"conscience", cat:"Concepts"},
  {en:"thought", fr:"pensée", cat:"Concepts"},
  {en:"feeling", fr:"sentiment", cat:"Concepts"},
  {en:"emotion", fr:"émotion", cat:"Concepts"},
  {en:"drive", fr:"pulsion", cat:"Concepts"},
  {en:"instinct", fr:"instinct", cat:"Concepts"},
  {en:"motivation", fr:"motivation", cat:"Concepts"},
  {en:"attention", fr:"attention", cat:"Concepts"},
  {en:"intelligence", fr:"intelligence", cat:"Concepts"},
  {en:"personality", fr:"personnalité", cat:"Concepts"},
  {en:"trait", fr:"trait de caractère", cat:"Concepts"},
  {en:"belief", fr:"croyance", cat:"Concepts"},
  {en:"learning", fr:"apprentissage", cat:"Concepts"},
  {en:"memory", fr:"mémoire", cat:"Concepts"},
  {en:"arousal", fr:"activation / éveil", cat:"Concepts"},
  {en:"mood", fr:"humeur", cat:"Concepts"},
  {en:"nature vs nurture", fr:"inné vs acquis", cat:"Concepts"},
  {en:"unconscious", fr:"inconscient", cat:"Concepts"},
  {en:"self", fr:"le soi", cat:"Concepts"},
  {en:"identity", fr:"identité", cat:"Concepts"},
  {en:"habit", fr:"habitude", cat:"Concepts"},
  // Cognition
  {en:"reasoning", fr:"raisonnement", cat:"Cognition"},
  {en:"problem-solving", fr:"résolution de problèmes", cat:"Cognition"},
  {en:"decision-making", fr:"prise de décision", cat:"Cognition"},
  {en:"language", fr:"langage", cat:"Cognition"},
  {en:"concept", fr:"concept", cat:"Cognition"},
  {en:"schema", fr:"schéma mental", cat:"Cognition"},
  {en:"recall", fr:"rappel", cat:"Cognition"},
  {en:"recognition", fr:"reconnaissance", cat:"Cognition"},
  {en:"encoding", fr:"encodage", cat:"Cognition"},
  {en:"retrieval", fr:"récupération", cat:"Cognition"},
  {en:"forgetting", fr:"oubli", cat:"Cognition"},
  {en:"working memory", fr:"mémoire de travail", cat:"Cognition"},
  {en:"bias", fr:"biais", cat:"Cognition"},
  // Émotions
  {en:"fear", fr:"peur", cat:"Émotions"},
  {en:"anger", fr:"colère", cat:"Émotions"},
  {en:"joy", fr:"joie", cat:"Émotions"},
  {en:"sadness", fr:"tristesse", cat:"Émotions"},
  {en:"disgust", fr:"dégoût", cat:"Émotions"},
  {en:"surprise", fr:"surprise", cat:"Émotions"},
  {en:"shame", fr:"honte", cat:"Émotions"},
  {en:"guilt", fr:"culpabilité", cat:"Émotions"},
  {en:"empathy", fr:"empathie", cat:"Émotions"},
  // Neurosciences
  {en:"brain", fr:"cerveau", cat:"Neurosciences"},
  {en:"neuron", fr:"neurone", cat:"Neurosciences"},
  {en:"synapse", fr:"synapse", cat:"Neurosciences"},
  {en:"neurotransmitter", fr:"neurotransmetteur", cat:"Neurosciences"},
  {en:"dopamine", fr:"dopamine", cat:"Neurosciences"},
  {en:"serotonin", fr:"sérotonine", cat:"Neurosciences"},
  {en:"hormone", fr:"hormone", cat:"Neurosciences"},
  {en:"lobe", fr:"lobe", cat:"Neurosciences"},
  {en:"cortex", fr:"cortex", cat:"Neurosciences"},
  {en:"nervous system", fr:"système nerveux", cat:"Neurosciences"},
  {en:"reflex", fr:"réflexe", cat:"Neurosciences"},
  {en:"plasticity", fr:"plasticité", cat:"Neurosciences"},
  // Social
  {en:"conformity", fr:"conformisme", cat:"Social"},
  {en:"obedience", fr:"obéissance", cat:"Social"},
  {en:"attitude", fr:"attitude", cat:"Social"},
  {en:"stereotype", fr:"stéréotype", cat:"Social"},
  {en:"prejudice", fr:"préjugé", cat:"Social"},
  {en:"group", fr:"groupe", cat:"Social"},
  {en:"norm", fr:"norme", cat:"Social"},
  {en:"role", fr:"rôle", cat:"Social"},
  {en:"persuasion", fr:"persuasion", cat:"Social"},
  {en:"bystander", fr:"témoin passif", cat:"Social"},
  // Méthodo
  {en:"research", fr:"recherche", cat:"Méthodo"},
  {en:"study", fr:"étude", cat:"Méthodo"},
  {en:"survey", fr:"enquête", cat:"Méthodo"},
  {en:"questionnaire", fr:"questionnaire", cat:"Méthodo"},
  {en:"interview", fr:"entretien", cat:"Méthodo"},
  {en:"sample", fr:"échantillon", cat:"Méthodo"},
  {en:"hypothesis", fr:"hypothèse", cat:"Méthodo"},
  {en:"variable", fr:"variable", cat:"Méthodo"},
  {en:"control group", fr:"groupe contrôle", cat:"Méthodo"},
  {en:"evidence", fr:"preuves", cat:"Méthodo"},
  {en:"data", fr:"données", cat:"Méthodo"},
  {en:"findings", fr:"résultats d'étude", cat:"Méthodo"},
  {en:"reliability", fr:"fiabilité", cat:"Méthodo"},
  {en:"validity", fr:"validité", cat:"Méthodo"},
  {en:"replication", fr:"réplication", cat:"Méthodo"},
  {en:"peer-reviewed", fr:"évalué par les pairs", cat:"Méthodo"},
  {en:"framework", fr:"cadre théorique", cat:"Méthodo"},
  {en:"consent", fr:"consentement", cat:"Méthodo"},
  {en:"ethics", fr:"éthique", cat:"Méthodo"},
  {en:"placebo", fr:"placebo", cat:"Méthodo"},
  {en:"double-blind", fr:"double aveugle", cat:"Méthodo"},
  {en:"longitudinal", fr:"longitudinal", cat:"Méthodo"},
  {en:"cross-sectional", fr:"transversal", cat:"Méthodo"},
  {en:"qualitative", fr:"qualitatif", cat:"Méthodo"},
  {en:"quantitative", fr:"quantitatif", cat:"Méthodo"},
  {en:"generalisation", fr:"généralisation", cat:"Méthodo"},
  {en:"confound", fr:"variable parasite", cat:"Méthodo"},
  // Stats
  {en:"mean", fr:"moyenne", cat:"Stats"},
  {en:"median", fr:"médiane", cat:"Stats"},
  {en:"range", fr:"étendue", cat:"Stats"},
  {en:"standard deviation", fr:"écart-type", cat:"Stats"},
  {en:"correlation", fr:"corrélation", cat:"Stats"},
  {en:"significant", fr:"significatif", cat:"Stats"},
  {en:"frequency", fr:"fréquence", cat:"Stats"},
  {en:"probability", fr:"probabilité", cat:"Stats"},
  {en:"pattern", fr:"tendance", cat:"Stats"},
  {en:"p-value", fr:"valeur p", cat:"Stats"},
  {en:"effect size", fr:"taille d'effet", cat:"Stats"},
  {en:"t-test", fr:"test t", cat:"Stats"},
  {en:"regression", fr:"régression", cat:"Stats"},
  {en:"distribution", fr:"distribution", cat:"Stats"},
  {en:"outlier", fr:"valeur aberrante", cat:"Stats"},
  {en:"variance", fr:"variance", cat:"Stats"},
  // Clinique
  {en:"disorder", fr:"trouble", cat:"Clinique"},
  {en:"assessment", fr:"évaluation", cat:"Clinique"},
  {en:"diagnosis", fr:"diagnostic", cat:"Clinique"},
  {en:"symptom", fr:"symptôme", cat:"Clinique"},
  {en:"treatment", fr:"traitement", cat:"Clinique"},
  {en:"therapy", fr:"thérapie", cat:"Clinique"},
  {en:"coping", fr:"faire face", cat:"Clinique"},
  {en:"anxiety", fr:"anxiété", cat:"Clinique"},
  {en:"depression", fr:"dépression", cat:"Clinique"},
  {en:"stress", fr:"stress", cat:"Clinique"},
  {en:"trauma", fr:"traumatisme", cat:"Clinique"},
  {en:"resilience", fr:"résilience", cat:"Clinique"},
  {en:"grief", fr:"deuil", cat:"Clinique"},
  {en:"wellbeing", fr:"bien-être", cat:"Clinique"},
  {en:"self-esteem", fr:"estime de soi", cat:"Clinique"},
  {en:"mindfulness", fr:"pleine conscience", cat:"Clinique"},
  {en:"phobia", fr:"phobie", cat:"Clinique"},
  {en:"addiction", fr:"addiction", cat:"Clinique"},
  {en:"burnout", fr:"épuisement professionnel", cat:"Clinique"},
  {en:"relapse", fr:"rechute", cat:"Clinique"},
  {en:"prognosis", fr:"pronostic", cat:"Clinique"},
  {en:"remission", fr:"rémission", cat:"Clinique"},
  // Développement
  {en:"development", fr:"développement", cat:"Développement"},
  {en:"infancy", fr:"petite enfance", cat:"Développement"},
  {en:"childhood", fr:"enfance", cat:"Développement"},
  {en:"adolescence", fr:"adolescence", cat:"Développement"},
  {en:"ageing", fr:"vieillissement", cat:"Développement"},
  {en:"milestone", fr:"étape clé", cat:"Développement"},
  {en:"caregiver", fr:"aidant", cat:"Développement"},
  {en:"attachment", fr:"attachement", cat:"Développement"},
  {en:"reinforcement", fr:"renforcement", cat:"Développement"},
  {en:"conditioning", fr:"conditionnement", cat:"Développement"},
  {en:"puberty", fr:"puberté", cat:"Développement"},
  {en:"maturation", fr:"maturation", cat:"Développement"},
  {en:"temperament", fr:"tempérament", cat:"Développement"},
  // Verbes
  {en:"to assess", fr:"évaluer", cat:"Verbes"},
  {en:"to measure", fr:"mesurer", cat:"Verbes"},
  {en:"to assume", fr:"supposer", cat:"Verbes"},
  {en:"to suggest", fr:"suggérer", cat:"Verbes"},
  {en:"to highlight", fr:"mettre en évidence", cat:"Verbes"},
  {en:"to investigate", fr:"enquêter sur", cat:"Verbes"},
  {en:"to conduct", fr:"mener une étude", cat:"Verbes"},
  {en:"to compare", fr:"comparer", cat:"Verbes"},
  {en:"to conclude", fr:"conclure", cat:"Verbes"},
  {en:"to predict", fr:"prédire", cat:"Verbes"},
  {en:"to influence", fr:"influencer", cat:"Verbes"},
  {en:"to be aware of", fr:"avoir conscience de", cat:"Verbes"},
  {en:"to observe", fr:"observer", cat:"Verbes"},
  {en:"to record", fr:"enregistrer", cat:"Verbes"},
  {en:"to replicate", fr:"reproduire", cat:"Verbes"},
  {en:"to demonstrate", fr:"démontrer", cat:"Verbes"},
  {en:"to reject", fr:"rejeter", cat:"Verbes"},
  {en:"to reveal", fr:"révéler", cat:"Verbes"}
];

/* ------------------------- GLOSSAIRE ------------------------- */
const GLOSSARY = [
  {term:"Cognition", cat:"Concepts", def:"L'ensemble des processus mentaux : perception, attention, mémoire, langage, raisonnement."},
  {term:"Attachement", cat:"Développement", def:"Lien affectif durable, surtout entre l'enfant et la personne qui s'en occupe (Bowlby)."},
  {term:"Résilience", cat:"Clinique", def:"Capacité à se reconstruire après une épreuve difficile."},
  {term:"Biais cognitif", cat:"Cognition", def:"Erreur systématique de raisonnement qui éloigne du jugement rationnel."},
  {term:"Biais de confirmation", cat:"Cognition", def:"Tendance à ne retenir que ce qui confirme ce qu'on croit déjà."},
  {term:"Renforcement", cat:"Apprentissage", def:"Conséquence qui augmente la probabilité qu'un comportement se répète (Skinner)."},
  {term:"Conditionnement opérant", cat:"Apprentissage", def:"Apprentissage où le comportement est modelé par ses conséquences (récompense/punition)."},
  {term:"Empathie", cat:"Relation", def:"Capacité à comprendre et ressentir les émotions d'autrui."},
  {term:"Inconscient", cat:"Psychanalyse", def:"Partie de l'esprit hors de la conscience qui influence nos actes (Freud)."},
  {term:"Pulsion", cat:"Psychanalyse", def:"Force psychique interne qui pousse à agir (Freud)."},
  {term:"Homéostasie", cat:"Biologie", def:"Maintien de l'équilibre interne de l'organisme (température, faim…)."},
  {term:"Plasticité cérébrale", cat:"Neurosciences", def:"Capacité du cerveau à se réorganiser et créer de nouvelles connexions."},
  {term:"Système limbique", cat:"Neurosciences", def:"Structures cérébrales impliquées dans les émotions et la mémoire."},
  {term:"Conditionnement", cat:"Apprentissage", def:"Apprentissage par association entre un stimulus et une réponse."},
  {term:"Perception", cat:"Cognition", def:"Façon dont on interprète les informations captées par nos sens."},
  {term:"Mémoire de travail", cat:"Cognition", def:"Mémoire à court terme pour garder et manipuler une info quelques secondes."},
  {term:"Métacognition", cat:"Cognition", def:"Réfléchir sur sa propre façon de penser et d'apprendre."},
  {term:"Effet de test", cat:"Cognition", def:"On mémorise mieux en se testant qu'en relisant passivement."},
  {term:"Trouble du spectre de l'autisme (TSA)", cat:"Clinique", def:"Trouble neurodéveloppemental touchant la communication et les interactions, avec des intérêts spécifiques et un besoin de repères et de routines."},
  {term:"DSM-5", cat:"Clinique", def:"Manuel diagnostique et statistique des troubles mentaux (APA), référence pour classer les troubles."},
  {term:"Effet placebo", cat:"Clinique", def:"Amélioration due à la croyance en un traitement, sans principe actif réel."},
  {term:"Neurone", cat:"Neurosciences", def:"Cellule de base du système nerveux qui transmet l'information."},
  {term:"Stress", cat:"Clinique", def:"Réponse de l'organisme face à une demande ou une menace perçue."},
  {term:"Estime de soi", cat:"Clinique", def:"Valeur et respect qu'une personne s'accorde à elle-même."},
  {term:"Corrélation", cat:"Stats", def:"Lien statistique entre deux variables. Attention : corrélation n'est pas causalité."},
  {term:"Validité", cat:"Méthodo", def:"Un test est valide s'il mesure réellement ce qu'il prétend mesurer."},
  {term:"Fiabilité", cat:"Méthodo", def:"Un test est fiable s'il donne des résultats stables quand on le répète."},
  {term:"Zone proximale de développement", cat:"Développement", def:"Écart entre ce que l'enfant sait faire seul et avec de l'aide (Vygotski)."},
  {term:"Motivation", cat:"Concepts", def:"Ensemble des forces qui poussent une personne à agir et persévérer."}
];

/* ------------------------- FICHE : GRANDS COURANTS ------------------------- */
const COURANTS = [
  {title:"Psychanalyse", sub:"Freud · début du XXᵉ s.", body:`
    <p>La <span class="kw">psychanalyse</span> est le premier grand modèle de la psychologie, créé par Sigmund Freud à Vienne. Son idée révolutionnaire : une large part de notre vie mentale est <span class="kw">inconsciente</span> et échappe à notre volonté. Nos comportements, nos rêves, nos oublis auraient un sens caché.</p>
    <h4>La structure de la personnalité</h4>
    <p>Freud décrit trois instances en conflit permanent. Le <span class="kw">ça</span> est la source des pulsions et recherche le plaisir immédiat. Le <span class="kw">surmoi</span> représente la morale, les interdits intériorisés (les « il faut » et « il ne faut pas »). Le <span class="kw">moi</span> est l'arbitre : il compose entre les désirs du ça, les exigences du surmoi et la réalité extérieure.</p>
    <h4>Accéder à l'inconscient</h4>
    <p>Freud parle du rêve comme de « la voie royale » vers l'inconscient. Les <span class="kw">lapsus</span> et les <span class="kw">actes manqués</span> (oublier un rendez-vous qu'on redoute) trahiraient des désirs cachés. En thérapie, l'<span class="kw">association libre</span> (dire tout ce qui vient à l'esprit) permet de faire remonter ce qui est refoulé.</p>
    <h4>Les mécanismes de défense</h4>
    <p>Pour se protéger de l'angoisse, le moi utilise des stratégies inconscientes : le <span class="kw">refoulement</span> (repousser un souvenir pénible), la <span class="kw">projection</span> (attribuer à autrui ses propres désirs), le <span class="kw">déni</span>, la sublimation…</p>
    <div class="callout"><span class="ct">Exemple</span>Un lapsus qui remplace un mot par un autre « révèle » une pensée que l'on n'assumait pas consciemment.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Inconscient · ça / moi / surmoi · pulsions · mécanismes de défense. Modèle fondateur et très influent en clinique, mais peu vérifiable expérimentalement, ce qui lui est souvent reproché.</div>`},

  {title:"Behaviorisme", sub:"Watson, Skinner · 1913–1950", body:`
    <p>Le <span class="kw">behaviorisme</span> (de l'anglais <em>behaviour</em>, comportement) réagit contre la psychanalyse : puisqu'on ne peut pas observer l'inconscient, disent ses auteurs, étudions seulement ce qui est <span class="kw">observable et mesurable</span> — le comportement. La pensée devient une « boîte noire » qu'on laisse de côté.</p>
    <h4>Le conditionnement classique (Pavlov)</h4>
    <p>Un stimulus neutre, répété avec un stimulus qui déclenche naturellement une réaction, finit par déclencher seul cette réaction. Le chien de Pavlov salive au son d'une cloche parce qu'elle a été associée à la nourriture.</p>
    <h4>Le conditionnement opérant (Skinner)</h4>
    <p>Ici, c'est la <span class="kw">conséquence</span> d'un comportement qui compte. Un comportement suivi d'une <span class="kw">récompense</span> (renforcement) a tendance à se répéter ; suivi d'une <span class="kw">punition</span>, il diminue. Skinner le démontre avec des rats qui apprennent à appuyer sur un levier.</p>
    <h4>Applications</h4>
    <p>Le behaviorisme a donné des outils très concrets : éducation, gestion des comportements, thérapies des phobies, systèmes de récompenses. Il est à la base des <span class="kw">TCC</span> actuelles.</p>
    <div class="callout"><span class="ct">Exemple</span>Un enfant félicité chaque fois qu'il range sa chambre (renforcement positif) rangera plus souvent.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Comportement observable · stimulus-réponse · conditionnement classique et opérant · renforcement / punition. Reproché : néglige la pensée, les émotions et le sens.</div>`},

  {title:"Cognitivisme", sub:"Neisser · à partir de 1950–60", body:`
    <p>Le <span class="kw">cognitivisme</span> rouvre la « boîte noire » que le behaviorisme avait fermée. Il étudie ce qui se passe entre le stimulus et la réponse : comment l'esprit <span class="kw">traite l'information</span>. La métaphore de l'époque est celle de l'ordinateur : entrée (perception) → traitement (mémoire, raisonnement) → sortie (réponse).</p>
    <h4>Les grands domaines</h4>
    <ul>
      <li><span class="kw">Perception</span> : donner du sens aux informations des sens.</li>
      <li><span class="kw">Attention</span> : sélectionner ce qui est important.</li>
      <li><span class="kw">Mémoire</span> : encoder, stocker, récupérer.</li>
      <li><span class="kw">Langage</span> et <span class="kw">raisonnement</span> : manipuler des concepts.</li>
    </ul>
    <h4>Schémas et biais</h4>
    <p>L'esprit organise ses connaissances en <span class="kw">schémas</span> (des modèles tout faits) qui accélèrent le traitement mais produisent aussi des <span class="kw">biais cognitifs</span> — des erreurs systématiques de jugement.</p>
    <div class="callout"><span class="ct">Exemple</span>On lit plus vite un texte dont les mots ont des lettres mélangées, car le cerveau complète à partir de schémas.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Traitement de l'information · perception, attention, mémoire, langage · schémas et biais. C'est aujourd'hui l'un des courants dominants, à la base des sciences cognitives.</div>`},

  {title:"Humanisme", sub:"Rogers, Maslow · années 1950–60", body:`
    <p>La psychologie <span class="kw">humaniste</span> se présente comme la « troisième force », entre psychanalyse et behaviorisme jugés trop réducteurs. Elle met l'humain, sa liberté et sa <span class="kw">tendance à se réaliser</span> au centre.</p>
    <h4>Maslow et la pyramide des besoins</h4>
    <p>Abraham Maslow classe les besoins humains, des plus fondamentaux aux plus élevés : physiologiques, sécurité, appartenance, estime, puis <span class="kw">accomplissement de soi</span>. L'idée : on cherche à satisfaire les besoins de base avant les besoins supérieurs.</p>
    <h4>Rogers et l'approche centrée sur la personne</h4>
    <p>Carl Rogers fonde une thérapie basée sur trois attitudes du thérapeute : l'<span class="kw">empathie</span>, la <span class="kw">congruence</span> (être authentique) et le <span class="kw">regard positif inconditionnel</span> (accueillir la personne sans juger). L'individu possède en lui les ressources pour évoluer.</p>
    <div class="callout"><span class="ct">Exemple</span>En entretien, reformuler ce que ressent la personne sans donner de conseil ni juger : c'est l'écoute active de Rogers.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Réalisation de soi · pyramide de Maslow · empathie et écoute active (Rogers). Approche chaleureuse et respectueuse, parfois critiquée pour son manque de rigueur scientifique.</div>`},

  {title:"Approche développementale", sub:"Piaget · XXᵉ siècle", body:`
    <p>Ce courant s'intéresse à la façon dont l'esprit <span class="kw">se construit et évolue</span> tout au long de la vie, surtout durant l'enfance. Jean Piaget en est la figure majeure : pour lui, l'intelligence se construit par étapes, à travers l'action de l'enfant sur le monde.</p>
    <h4>Assimilation et accommodation</h4>
    <p>L'enfant <span class="kw">assimile</span> le nouveau à ce qu'il connaît déjà, puis <span class="kw">accommode</span> (modifie) ses schémas quand ils ne suffisent plus. Ce va-et-vient fait progresser la pensée.</p>
    <h4>Les 4 stades de Piaget</h4>
    <ul>
      <li><span class="kw">Sensori-moteur</span> (0–2 ans) : découverte par les sens et l'action ; acquisition de la permanence de l'objet.</li>
      <li><span class="kw">Préopératoire</span> (2–7 ans) : langage et imagination, mais pensée encore égocentrée.</li>
      <li><span class="kw">Opératoire concret</span> (7–11 ans) : logique sur des objets concrets ; comprend que la quantité se conserve.</li>
      <li><span class="kw">Opératoire formel</span> (11 ans et +) : raisonnement abstrait et hypothétique.</li>
    </ul>
    <div class="callout"><span class="ct">Exemple</span>Avant 7 ans, un enfant croit qu'un verre haut et fin contient « plus » d'eau qu'un verre large, même si on a versé la même quantité.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Développement par stades · assimilation / accommodation · 4 stades de Piaget. Vygotski complète en insistant sur le rôle du social et du langage.</div>`},

  {title:"Neurosciences (approche biologique)", sub:"aujourd'hui", body:`
    <p>L'approche <span class="kw">biologique</span> explique le comportement par le fonctionnement du corps, en particulier du <span class="kw">cerveau</span>, des <span class="kw">neurones</span> et des <span class="kw">hormones</span>. Le progrès des techniques d'imagerie (IRM) lui a donné un essor considérable.</p>
    <h4>Neurones et neurotransmetteurs</h4>
    <p>Le neurone transmet l'information sous forme électrique, puis chimique au niveau de la <span class="kw">synapse</span> grâce aux <span class="kw">neurotransmetteurs</span> (dopamine, sérotonine…). Un déséquilibre de ces messagers est impliqué dans certains troubles (dépression, addiction).</p>
    <h4>Plasticité cérébrale</h4>
    <p>Le cerveau n'est pas figé : il se réorganise avec l'expérience et l'apprentissage. C'est la <span class="kw">plasticité</span>, qui rend possible la rééducation après une lésion.</p>
    <div class="callout"><span class="ct">Exemple</span>Chez les musiciens, les zones du cerveau dédiées aux doigts sont plus développées : l'entraînement modifie le cerveau.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Cerveau · neurones · neurotransmetteurs · plasticité. Puissant, mais réduire toute la psychologie à la biologie serait excessif (« réductionnisme »).</div>`},

  {title:"Psychologie sociale", sub:"Bandura, Milgram, Asch", body:`
    <p>La psychologie <span class="kw">sociale</span> étudie comment la présence des autres et le contexte influencent nos pensées et nos actes. Souvent, la situation pèse plus que la personnalité.</p>
    <h4>Apprentissage social (Bandura)</h4>
    <p>On apprend beaucoup en <span class="kw">observant et en imitant</span> les autres, sans essais-erreurs. C'est l'apprentissage vicariant, démontré par l'expérience de la poupée Bobo.</p>
    <h4>Influence du groupe</h4>
    <p>Le <span class="kw">conformisme</span> (Asch) nous pousse à adopter l'avis du groupe, même faux. La <span class="kw">soumission à l'autorité</span> (Milgram) montre que des gens ordinaires peuvent obéir à des ordres nuisibles.</p>
    <div class="callout"><span class="ct">Exemple</span>Dans un groupe qui affirme à l'unanimité une réponse manifestement fausse, une majorité de personnes finit par s'y rallier au moins une fois.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Le poids de la situation · apprentissage par imitation · conformisme · soumission à l'autorité · normes de groupe.</div>`},

  {title:"Les TCC (approche validée)", sub:"synthèse cognitivo-comportementale", body:`
    <p>Les <span class="kw">thérapies cognitivo-comportementales</span> (TCC) combinent le behaviorisme (agir sur les comportements) et le cognitivisme (agir sur les pensées). Leur principe : nos émotions découlent en grande partie de la façon dont nous <span class="kw">interprétons</span> les situations.</p>
    <h4>Le triangle pensées–émotions–comportements</h4>
    <p>Une même situation produit des émotions différentes selon la pensée qui l'accompagne. En modifiant des pensées automatiques irréalistes, on change le vécu émotionnel et le comportement.</p>
    <h4>Des méthodes concrètes</h4>
    <p>Exposition progressive pour les phobies, restructuration des pensées, exercices entre les séances, objectifs mesurables. Les TCC ont une <span class="kw">efficacité démontrée</span> par de nombreuses études.</p>
    <div class="callout"><span class="ct">Exemple</span>Pour une phobie de l'ascenseur, on s'expose par étapes, du simple fait de regarder l'ascenseur jusqu'à y monter, en gérant l'anxiété.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Pensées → émotions → comportements · exposition · restructuration cognitive · approche parmi les mieux validées scientifiquement aujourd'hui.</div>`}
];

/* ------------------------- FICHE : THÉORICIENS ------------------------- */
const THEORICIENS = [
  {title:"Sigmund Freud", sub:"Psychanalyse · 1856–1939", body:`
    <p>Médecin autrichien, Freud est le <span class="kw">fondateur de la psychanalyse</span>. Il révolutionne la vision de l'esprit en affirmant que l'<span class="kw">inconscient</span> gouverne une grande partie de nos actes.</p>
    <p>Il décrit la personnalité en trois instances (ça, moi, surmoi), le rôle des <span class="kw">pulsions</span> (notamment sexuelles) et des mécanismes de défense. Le rêve, le lapsus et l'association libre deviennent des outils pour explorer le psychisme.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Inconscient, pulsions, ça/moi/surmoi. Immense influence, mais théorie difficile à tester scientifiquement.</div>`},
  {title:"Ivan Pavlov", sub:"Behaviorisme · 1849–1936", body:`
    <p>Physiologiste russe, Pavlov découvre par hasard le <span class="kw">conditionnement classique</span> en étudiant la digestion du chien. Un stimulus neutre (une cloche) associé à la nourriture finit par déclencher seul la salivation.</p>
    <p>Cette découverte montre qu'un comportement peut s'apprendre par simple <span class="kw">association</span>, sans volonté. Elle ouvre la voie au behaviorisme.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Le chien de Pavlov · conditionnement classique · stimulus conditionné / inconditionné.</div>`},
  {title:"B. F. Skinner", sub:"Behaviorisme · 1904–1990", body:`
    <p>Psychologue américain, Skinner développe le <span class="kw">conditionnement opérant</span> : un comportement dépend de ses <span class="kw">conséquences</span>. Renforcé (récompensé), il augmente ; puni, il diminue.</p>
    <p>Avec sa « boîte de Skinner », il montre comment façonner précisément un comportement. Ses idées ont profondément marqué l'éducation et les thérapies comportementales.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Renforcement positif / négatif · punition · façonnement du comportement.</div>`},
  {title:"Jean Piaget", sub:"Développement · 1896–1980", body:`
    <p>Psychologue suisse, Piaget étudie comment l'intelligence se <span class="kw">construit chez l'enfant</span>. Il décrit 4 grands stades, du sensori-moteur au raisonnement abstrait.</p>
    <p>Pour lui, l'enfant est un « petit chercheur » qui construit ses connaissances en agissant, par assimilation et accommodation.</p>
    <div class="callout ok"><span class="ct">À retenir</span>4 stades du développement cognitif · assimilation / accommodation · permanence de l'objet · conservation.</div>`},
  {title:"Lev Vygotski", sub:"Développement · 1896–1934", body:`
    <p>Psychologue russe, Vygotski insiste sur le rôle du <span class="kw">social et du langage</span> dans le développement, là où Piaget mettait l'accent sur l'action individuelle.</p>
    <p>Sa notion clé est la <span class="kw">zone proximale de développement</span> : l'écart entre ce que l'enfant réussit seul et ce qu'il réussit avec l'aide d'un adulte ou d'un pair. C'est là que l'apprentissage est le plus efficace.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Rôle du social et du langage · zone proximale de développement · étayage.</div>`},
  {title:"Abraham Maslow", sub:"Humanisme · 1908–1970", body:`
    <p>Psychologue américain, Maslow propose la célèbre <span class="kw">pyramide des besoins</span>, des besoins physiologiques jusqu'à l'accomplissement de soi.</p>
    <p>Il s'intéresse aux personnes qui vont bien et à leur épanouissement, plutôt qu'aux seuls troubles.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Pyramide des besoins · accomplissement de soi · psychologie positive avant l'heure.</div>`},
  {title:"Carl Rogers", sub:"Humanisme · 1902–1987", body:`
    <p>Psychologue américain, Rogers crée l'<span class="kw">approche centrée sur la personne</span>. Il pense que chacun possède les ressources pour évoluer, à condition d'être accueilli avec empathie et sans jugement.</p>
    <p>Il définit les attitudes du bon accompagnant : empathie, authenticité (congruence), regard positif inconditionnel.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Empathie · écoute active · regard positif inconditionnel · congruence.</div>`},
  {title:"John Bowlby", sub:"Développement · 1907–1990", body:`
    <p>Psychiatre britannique, Bowlby fonde la <span class="kw">théorie de l'attachement</span> : le lien précoce entre l'enfant et la personne qui s'en occupe est un besoin fondamental, essentiel à la sécurité affective.</p>
    <p>Un attachement sécure favorise l'exploration et de bonnes relations futures ; un attachement perturbé peut fragiliser. Mary Ainsworth prolongera ses travaux (styles d'attachement).</p>
    <div class="callout ok"><span class="ct">À retenir</span>Attachement · base de sécurité · styles sécure / insécure.</div>`},
  {title:"Albert Bandura", sub:"Social · 1925–2021", body:`
    <p>Psychologue canadien, Bandura montre qu'on apprend beaucoup en <span class="kw">observant les autres</span> (apprentissage social ou vicariant), sans avoir à tout expérimenter soi-même.</p>
    <p>Il développe aussi le concept de <span class="kw">sentiment d'efficacité personnelle</span> : la croyance en sa capacité à réussir, qui influence fortement la motivation.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Apprentissage par imitation · poupée Bobo · sentiment d'efficacité personnelle.</div>`},
  {title:"Stanley Milgram", sub:"Social · 1933–1984", body:`
    <p>Psychologue américain, Milgram réalise sa célèbre expérience sur la <span class="kw">soumission à l'autorité</span> : des participants ordinaires acceptent d'infliger (en apparence) des chocs électriques à autrui parce qu'un expérimentateur le leur ordonne.</p>
    <p>Résultat troublant : ce n'est pas la « méchanceté » mais la <span class="kw">situation</span> et l'autorité qui expliquent l'obéissance.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Soumission à l'autorité · poids de la situation · questions éthiques majeures.</div>`},
  {title:"Erik Erikson", sub:"Développement · 1902–1994", body:`
    <p>Psychanalyste, Erikson élargit la vision de Freud à toute la vie avec ses <span class="kw">8 stades psychosociaux</span>, chacun marqué par une « crise » à résoudre (par ex. identité / confusion à l'adolescence).</p>
    <p>Réussir une étape renforce la personnalité ; la manquer laisse une fragilité que l'on peut retravailler plus tard.</p>
    <div class="callout ok"><span class="ct">À retenir</span>8 stades · crise identitaire de l'adolescence · développement tout au long de la vie.</div>`},
  {title:"Elizabeth Loftus", sub:"Cognition · née en 1944", body:`
    <p>Psychologue américaine, Loftus a montré que la <span class="kw">mémoire n'est pas un enregistrement fidèle</span> mais une reconstruction, sensible aux suggestions.</p>
    <p>Ses travaux sur les <span class="kw">faux souvenirs</span> ont d'énormes conséquences sur la fiabilité des témoignages en justice.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Mémoire reconstructive · faux souvenirs · fiabilité des témoignages.</div>`},
  {title:"Daniel Kahneman", sub:"Cognition · 1934–2024", body:`
    <p>Psychologue, prix Nobel d'économie, Kahneman a étudié les <span class="kw">biais cognitifs</span> et la façon dont nous prenons des décisions.</p>
    <p>Il distingue deux modes de pensée : le <span class="kw">système 1</span> (rapide, intuitif, automatique) et le <span class="kw">système 2</span> (lent, réfléchi, coûteux en effort). Beaucoup d'erreurs viennent d'un système 1 trop pressé.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Système 1 (rapide) et système 2 (lent) · biais et heuristiques.</div>`}
];

/* ------------------------- FICHE : EXPÉRIENCES ------------------------- */
const EXPERIENCES = [
  {title:"Le chien de Pavlov", sub:"Pavlov · ~1900", body:`
    <p><span class="kw">Contexte.</span> Pavlov étudie la digestion et remarque que ses chiens salivent avant même de recevoir la nourriture.</p>
    <p><span class="kw">Déroulé.</span> Il fait sonner une cloche juste avant de donner à manger, de façon répétée.</p>
    <p><span class="kw">Résultat.</span> Bientôt, le chien salive au seul son de la cloche : un stimulus neutre est devenu un <span class="kw">stimulus conditionné</span>.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Naissance du conditionnement classique : on peut apprendre une réaction par simple association.</div>`},
  {title:"Le petit Albert", sub:"Watson · 1920", body:`
    <p><span class="kw">Contexte.</span> Watson veut montrer qu'une émotion peut s'apprendre par conditionnement.</p>
    <p><span class="kw">Déroulé.</span> On présente un rat blanc à un bébé (« Albert ») en produisant à chaque fois un bruit effrayant.</p>
    <p><span class="kw">Résultat.</span> Albert finit par avoir peur du rat, puis d'objets blancs et poilus (généralisation).</p>
    <div class="callout warn"><span class="ct">Attention</span>Expérience aujourd'hui jugée profondément non éthique : on ne pourrait plus la mener.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Les peurs peuvent s'apprendre · phénomène de généralisation.</div>`},
  {title:"La boîte de Skinner", sub:"Skinner · ~1935", body:`
    <p><span class="kw">Contexte.</span> Skinner cherche à mesurer précisément l'effet des conséquences sur le comportement.</p>
    <p><span class="kw">Déroulé.</span> Un rat est placé dans une boîte ; en appuyant sur un levier, il obtient de la nourriture.</p>
    <p><span class="kw">Résultat.</span> Le rat apprend vite à appuyer : le comportement récompensé se répète (renforcement).</p>
    <div class="callout ok"><span class="ct">À retenir</span>Conditionnement opérant · renforcement · façonnement progressif du comportement.</div>`},
  {title:"Les singes de Harlow", sub:"Harlow · 1958", body:`
    <p><span class="kw">Contexte.</span> On pensait que l'attachement du bébé venait surtout du fait d'être nourri.</p>
    <p><span class="kw">Déroulé.</span> De jeunes singes ont le choix entre une « mère » en fil de fer qui distribue du lait et une « mère » en tissu doux, sans nourriture.</p>
    <p><span class="kw">Résultat.</span> Les petits passent le plus de temps accrochés à la mère douce et s'y réfugient quand ils ont peur.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Le besoin de <span class="kw">réconfort</span> et de contact prime sur la seule nourriture : appui majeur pour la théorie de l'attachement.</div>`},
  {title:"La poupée Bobo", sub:"Bandura · 1961", body:`
    <p><span class="kw">Contexte.</span> Bandura veut montrer qu'on apprend en observant, sans être récompensé.</p>
    <p><span class="kw">Déroulé.</span> Des enfants regardent un adulte frapper une grande poupée gonflable (« Bobo »), puis on les laisse seuls avec elle.</p>
    <p><span class="kw">Résultat.</span> Les enfants imitent les gestes agressifs observés.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Apprentissage social par imitation · rôle des modèles (dont les écrans).</div>`},
  {title:"La soumission à l'autorité", sub:"Milgram · 1963", body:`
    <p><span class="kw">Contexte.</span> Après la Seconde Guerre mondiale, Milgram cherche à comprendre l'obéissance à des ordres nuisibles.</p>
    <p><span class="kw">Déroulé.</span> Un « professeur » (le vrai participant) doit envoyer des chocs électriques croissants à un « élève » (un complice) à chaque erreur, sur ordre de l'expérimentateur.</p>
    <p><span class="kw">Résultat.</span> Une large majorité obéit jusqu'aux niveaux les plus élevés, malgré leur malaise.</p>
    <div class="callout warn"><span class="ct">Attention</span>Résultats et méthode très discutés sur le plan éthique.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Des gens ordinaires peuvent obéir à une autorité contre leurs valeurs.</div>`},
  {title:"Le conformisme", sub:"Asch · 1951", body:`
    <p><span class="kw">Contexte.</span> Asch teste jusqu'où le groupe influence nos jugements.</p>
    <p><span class="kw">Déroulé.</span> On demande de comparer des longueurs de lignes (tâche facile). Des complices donnent tous, à voix haute, la même réponse fausse avant le vrai participant.</p>
    <p><span class="kw">Résultat.</span> Une bonne part des participants se rallie au moins une fois à la réponse fausse du groupe.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Pression du groupe · conformisme · peur de se démarquer.</div>`},
  {title:"La prison de Stanford", sub:"Zimbardo · 1971", body:`
    <p><span class="kw">Contexte.</span> Zimbardo étudie l'effet des rôles sociaux.</p>
    <p><span class="kw">Déroulé.</span> Des étudiants volontaires jouent, dans une fausse prison, le rôle de gardiens ou de prisonniers.</p>
    <p><span class="kw">Résultat.</span> Les comportements deviennent si extrêmes que l'étude est arrêtée avant la fin.</p>
    <div class="callout warn"><span class="ct">Attention</span>Étude très critiquée aujourd'hui (méthode, consignes données aux gardiens) : à citer avec prudence.</div>
    <div class="callout ok"><span class="ct">À retenir</span>Pouvoir des rôles et des situations · déshumanisation possible.</div>`},
  {title:"Les faux souvenirs", sub:"Loftus · à partir de 1974", body:`
    <p><span class="kw">Contexte.</span> Loftus teste la fiabilité de la mémoire des témoins.</p>
    <p><span class="kw">Déroulé.</span> Après avoir vu un accident, des participants répondent à des questions dont la formulation varie (« heurté » vs « percuté »).</p>
    <p><span class="kw">Résultat.</span> Le simple choix des mots modifie leur souvenir de la vitesse, voire crée des détails inexistants.</p>
    <div class="callout ok"><span class="ct">À retenir</span>La mémoire se reconstruit · elle est sensible à la suggestion · prudence avec les témoignages.</div>`}
];

/* ------------------------- FICHE : MÉTHODO & STATS ------------------------- */
const METHODO = [
  {title:"La démarche scientifique", body:`
    <p>La psychologie est une <span class="kw">science</span> : elle ne se contente pas d'opinions, elle teste des idées avec des données. La démarche suit toujours les mêmes étapes.</p>
    <ul>
      <li><span class="kw">1. Question et hypothèse.</span> On formule une prédiction précise et testable (« si… alors… »).</li>
      <li><span class="kw">2. Étude.</span> On recueille des données auprès de participants.</li>
      <li><span class="kw">3. Analyse.</span> On traite les résultats, souvent avec des statistiques.</li>
      <li><span class="kw">4. Conclusion.</span> L'hypothèse est-elle soutenue ? On publie, d'autres tentent de <span class="kw">reproduire</span> (répliquer) le résultat.</li>
    </ul>
    <div class="callout ok"><span class="ct">À retenir</span>Une bonne étude est <span class="kw">réplicable</span> et <span class="kw">évaluée par les pairs</span>. Un résultat unique, non reproduit, reste fragile.</div>`},
  {title:"Les variables (VI et VD)", body:`
    <p>Dans une expérience, on manipule quelque chose pour voir son effet.</p>
    <ul>
      <li><span class="kw">Variable indépendante (VI)</span> : ce que l'expérimentateur <span class="kw">manipule</span> (ex. la quantité de sommeil).</li>
      <li><span class="kw">Variable dépendante (VD)</span> : ce qu'on <span class="kw">mesure</span> en retour (ex. le score à un test de mémoire).</li>
      <li><span class="kw">Variables parasites</span> (ou de confusion) : tout ce qui pourrait fausser le lien et qu'il faut contrôler.</li>
    </ul>
    <div class="callout"><span class="ct">Exemple</span>On fait varier les heures de sommeil (VI) et on regarde la mémoire (VD), en contrôlant l'âge, le café, etc.</div>`},
  {title:"Les types d'études", body:`
    <p>Toutes les questions ne se testent pas de la même façon.</p>
    <ul>
      <li><span class="kw">Expérimentale</span> : on manipule une VI et on contrôle le reste. Seule méthode qui permet de parler de <span class="kw">cause</span>.</li>
      <li><span class="kw">Corrélationnelle</span> : on observe si deux mesures varient ensemble, sans manipuler. Attention, cela ne prouve pas la cause.</li>
      <li><span class="kw">Observationnelle</span> : on observe des comportements sans intervenir.</li>
      <li><span class="kw">Étude de cas</span> : analyse approfondie d'une seule personne ou d'un petit groupe.</li>
      <li><span class="kw">Longitudinale</span> (suivre les mêmes personnes dans le temps) vs <span class="kw">transversale</span> (comparer des groupes d'âges différents au même moment).</li>
    </ul>
    <div class="callout warn"><span class="ct">Attention</span>Corrélation ≠ causalité. Deux choses peuvent varier ensemble à cause d'une troisième.</div>`},
  {title:"Échantillon et biais", body:`
    <p>On ne peut pas interroger toute la population : on étudie un <span class="kw">échantillon</span> censé la représenter.</p>
    <p>Un bon échantillon est assez <span class="kw">grand</span> et <span class="kw">représentatif</span>. Sinon apparaissent des <span class="kw">biais</span> : biais de sélection (échantillon non représentatif), biais de désirabilité sociale (on répond ce qui est « bien vu »), effet de l'expérimentateur, etc.</p>
    <div class="callout"><span class="ct">Exemple</span>Interroger uniquement des étudiants en psycho pour conclure sur « les Français » serait un biais de sélection.</div>`},
  {title:"Fiabilité, validité, éthique", body:`
    <p>Un outil de mesure doit être <span class="kw">fiable</span> (résultats stables si on répète) et <span class="kw">valide</span> (il mesure vraiment ce qu'il prétend). Les deux sont nécessaires.</p>
    <p>La recherche respecte des règles <span class="kw">éthiques</span> : consentement libre et éclairé, droit de se retirer, anonymat et confidentialité, absence de préjudice, debriefing à la fin.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Fiabilité = stable · Validité = mesure la bonne chose · Éthique = protéger les participants.</div>`}
];

/* ------------------------- FICHE : ALLER PLUS LOIN ------------------------- */
const ADVANCED = [
  {title:"Les modèles de la mémoire", body:`
    <p>La mémoire n'est pas un « tiroir » unique. Le <span class="kw">modèle d'Atkinson-Shiffrin</span> distingue trois magasins : mémoire <span class="kw">sensorielle</span> (très brève), mémoire à <span class="kw">court terme</span> et mémoire à <span class="kw">long terme</span>. L'information passe de l'un à l'autre si on lui prête attention et qu'on la répète.</p>
    <p>Baddeley affine la mémoire à court terme en <span class="kw">mémoire de travail</span>, avec une boucle pour les sons (boucle phonologique), un calepin pour les images (calepin visuo-spatial) et un chef d'orchestre (administrateur central).</p>
    <p>Trois étapes traversent toute la mémoire : <span class="kw">encodage</span> (entrer l'info), <span class="kw">stockage</span> (la garder), <span class="kw">récupération</span> (la ressortir). Beaucoup d'oublis sont en fait des échecs de récupération.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Sensorielle → court terme → long terme · mémoire de travail · encoder / stocker / récupérer.</div>`},
  {title:"Les 8 stades d'Erikson", body:`
    <p>Erikson découpe la vie en 8 étapes, chacune posant une « crise » à résoudre.</p>
    <ul>
      <li>Confiance / méfiance (nourrisson)</li>
      <li>Autonomie / honte et doute (1–3 ans)</li>
      <li>Initiative / culpabilité (3–6 ans)</li>
      <li>Compétence / infériorité (enfance)</li>
      <li>Identité / confusion des rôles (adolescence)</li>
      <li>Intimité / isolement (jeune adulte)</li>
      <li>Générativité / stagnation (âge adulte)</li>
      <li>Intégrité / désespoir (vieillesse)</li>
    </ul>
    <div class="callout ok"><span class="ct">À retenir</span>La crise clé de l'adolescence est la construction de l'<span class="kw">identité</span>.</div>`},
  {title:"Le développement moral (Kohlberg)", body:`
    <p>Kohlberg décrit comment évolue notre façon de juger le bien et le mal, en 3 niveaux.</p>
    <ul>
      <li><span class="kw">Préconventionnel</span> : on obéit pour éviter la punition ou obtenir une récompense.</li>
      <li><span class="kw">Conventionnel</span> : on respecte les règles et on cherche l'approbation des autres.</li>
      <li><span class="kw">Postconventionnel</span> : on se réfère à des principes éthiques personnels, parfois au-dessus des lois.</li>
    </ul>
    <div class="callout"><span class="ct">Exemple</span>Le fameux « dilemme de Heinz » (voler un médicament pour sauver sa femme) sert à situer le niveau de raisonnement moral.</div>`},
  {title:"La pyramide des besoins (Maslow)", body:`
    <p>Maslow hiérarchise les besoins humains, de la base au sommet.</p>
    <ul>
      <li>1. Besoins <span class="kw">physiologiques</span> (manger, boire, dormir)</li>
      <li>2. Besoin de <span class="kw">sécurité</span></li>
      <li>3. Besoin d'<span class="kw">appartenance</span> et d'amour</li>
      <li>4. Besoin d'<span class="kw">estime</span></li>
      <li>5. <span class="kw">Accomplissement de soi</span></li>
    </ul>
    <div class="callout warn"><span class="ct">Attention</span>Modèle très connu mais critiqué : l'ordre n'est pas aussi strict dans la réalité.</div>`},
  {title:"Le cerveau en bref", body:`
    <p>Le cortex se divise en quatre grands <span class="kw">lobes</span>, chacun avec des fonctions dominantes.</p>
    <ul>
      <li><span class="kw">Frontal</span> : décision, planification, langage, contrôle de soi.</li>
      <li><span class="kw">Pariétal</span> : toucher, repérage dans l'espace.</li>
      <li><span class="kw">Temporal</span> : audition, langage, mémoire.</li>
      <li><span class="kw">Occipital</span> : vision.</li>
    </ul>
    <p>En profondeur, le <span class="kw">système limbique</span> (dont l'amygdale et l'hippocampe) gère les émotions et la mémoire.</p>
    <div class="callout ok"><span class="ct">À retenir</span>4 lobes · système limbique = émotions + mémoire · hippocampe crucial pour les souvenirs.</div>`},
  {title:"Les neurotransmetteurs", body:`
    <p>Les neurones communiquent grâce à des messagers chimiques. Quelques-uns à connaître :</p>
    <ul>
      <li><span class="kw">Dopamine</span> : motivation, plaisir, circuit de la récompense.</li>
      <li><span class="kw">Sérotonine</span> : humeur, sommeil, appétit.</li>
      <li><span class="kw">GABA</span> : apaisement, réduction de l'anxiété.</li>
      <li><span class="kw">Acétylcholine</span> : mémoire et attention.</li>
    </ul>
    <div class="callout"><span class="ct">Exemple</span>Beaucoup d'antidépresseurs agissent en augmentant la disponibilité de la sérotonine.</div>`},
  {title:"Les statistiques inférentielles", body:`
    <p>Au-delà de la moyenne, on utilise des <span class="kw">tests statistiques</span> pour savoir si un résultat est dû au hasard ou non.</p>
    <ul>
      <li><span class="kw">Test t de Student</span> : comparer 2 moyennes.</li>
      <li><span class="kw">ANOVA</span> : comparer 3 groupes ou plus.</li>
      <li><span class="kw">Chi²</span> : comparer des effectifs, des catégories.</li>
      <li><span class="kw">r de Pearson</span> : force d'une corrélation, de −1 à +1.</li>
    </ul>
    <p>La <span class="kw">valeur p</span> indique la probabilité que le résultat soit dû au hasard : sous <span class="kw">.05</span>, on parle de résultat « significatif ». La <span class="kw">taille d'effet</span> dit, elle, si l'effet est réellement important.</p>
    <div class="callout warn"><span class="ct">Attention</span>« Significatif » ne veut pas dire « grand » ni « important » : toujours regarder aussi la taille d'effet.</div>`},
  {title:"Classer les troubles : DSM-5 & CIM-11", body:`
    <p>Pour poser des diagnostics communs, les professionnels s'appuient sur des classifications.</p>
    <ul>
      <li><span class="kw">DSM-5</span> : manuel de l'association américaine de psychiatrie (APA), centré sur les troubles mentaux.</li>
      <li><span class="kw">CIM-11</span> : classification de l'OMS, plus large (toutes les maladies), utilisée dans le monde entier.</li>
    </ul>
    <p>Ces outils facilitent la communication et la recherche, mais ils font débat : risque d'étiqueter, de « médicaliser » des variations normales.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Des repères communs pour diagnostiquer · utiles mais à manier avec esprit critique.</div>`}
];

/* ------------------------- FICHE : PNL ------------------------- */
const PNL_DOSSIER = [
  {title:"Qu'est-ce que la PNL ?", body:`
    <p>La <span class="kw">Programmation Neuro-Linguistique</span> (PNL) est née dans les années 1970 aux États-Unis, créée par Richard Bandler et John Grinder. Ils ont observé des thérapeutes efficaces et tenté de « modéliser » ce qui marchait pour le rendre reproductible.</p>
    <p>Le nom résume l'idée : <span class="kw">Neuro</span> (nos pensées passent par le système nerveux et les sens), <span class="kw">Linguistique</span> (le langage structure notre expérience), <span class="kw">Programmation</span> (nos habitudes sont comme des programmes qu'on peut ajuster).</p>
    <div class="callout warn"><span class="ct">Attention</span>La PNL est une méthode de développement personnel, <span class="kw">pas une théorie validée scientifiquement</span>. Elle peut donner des outils pratiques, mais ses affirmations ne sont pas prouvées comme celles des TCC. À distinguer nettement dans un cadre universitaire.</div>`},
  {title:"Les présupposés de base", body:`
    <p>La PNL s'appuie sur quelques principes de départ (des « présupposés »).</p>
    <ul>
      <li><span class="kw">La carte n'est pas le territoire</span> : chacun se fait sa représentation du monde, qui n'est pas la réalité elle-même.</li>
      <li>Derrière chaque comportement, il y a une <span class="kw">intention positive</span> pour la personne.</li>
      <li>Il n'y a pas d'échec, seulement des <span class="kw">retours d'information</span>.</li>
      <li>Nous avons déjà en nous des ressources pour changer.</li>
    </ul>`},
  {title:"VAKOG : les canaux sensoriels", body:`
    <p>Selon la PNL, nous vivons et pensons à travers nos sens, résumés par <span class="kw">VAKOG</span> : Visuel, Auditif, Kinesthésique (sensations), Olfactif, Gustatif. Chacun aurait des canaux dominants.</p>
    <p>Une personne à dominante <span class="kw">visuelle</span> retiendra et comprendra mieux avec des images, des schémas, des couleurs. D'où l'intérêt, pour réviser, de transformer les cours en cartes mentales et en visuels.</p>
    <div class="callout"><span class="ct">Exemple</span>Pour mémoriser une liste, un visuel la « voit » disposée dans l'espace ; un auditif se la répète à voix haute.</div>`},
  {title:"L'ancrage", body:`
    <p>Un <span class="kw">ancrage</span> associe un geste ou une image à un état intérieur, pour pouvoir le rappeler à volonté. C'est une version volontaire du réflexe de Pavlov.</p>
    <p>On revit intensément un souvenir de calme ou de confiance, puis on associe ce ressenti à un geste simple (serrer le poing). En répétant, le geste finit par « rappeler » l'état.</p>`},
  {title:"Le recadrage", body:`
    <p>Le <span class="kw">recadrage</span> consiste à changer le sens qu'on donne à une situation, sans changer les faits. Un même événement peut être vu comme un échec ou comme un apprentissage.</p>
    <div class="callout"><span class="ct">Exemple</span>« Je stresse avant un examen » peut se recadrer en « mon corps se prépare et se mobilise ».</div>`},
  {title:"Objectif bien formé et synchronisation", body:`
    <p>La PNL propose de formuler ses <span class="kw">objectifs</span> de façon précise : au positif (« je veux… » plutôt que « je ne veux plus… »), concret, sous son propre contrôle, et écologique (bon pour soi et son entourage).</p>
    <p>La <span class="kw">synchronisation</span> consiste à se mettre en douceur au rythme de l'autre (posture, ton, débit) pour créer un climat de confiance et mieux communiquer.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Outils pratiques utiles au quotidien, à utiliser avec esprit critique et sans en faire une science.</div>`}
];

const PNL = [
  {t:"La carte ≠ le réel", d:"Chacun voit le monde à sa façon. Ma vision n'est pas LA vérité, donc on peut la changer."},
  {t:"VAKOG", d:"On pense en images, sons et sensations. Plutôt visuelle : appuie-toi sur des images."},
  {t:"Objectif clair", d:"Un but précis, positif et réaliste : savoir exactement où l'on va."},
  {t:"L'ancrage", d:"Associer un geste simple à un état positif (calme, confiance) pour le retrouver quand on veut."},
  {t:"Le recadrage", d:"Changer le sens qu'on donne à une situation : la voir autrement."},
  {t:"La synchronisation", d:"Se mettre au rythme de l'autre (ton, gestes) pour créer un lien de confiance."}
];
const PNL_EX = [
  {t:"Créer une ancre de calme", d:`<p>Repense à un moment où tu te sentais confiante et sereine. Revis-le intensément : ce que tu voyais, entendais, ressentais. Au pic du ressenti, serre le poing quelques secondes, puis relâche. Répète 3 fois. Plus tard, serre le poing de la même façon pour rappeler cet état, par exemple avant un examen.</p>`},
  {t:"Recadrer une contrariété", d:`<p>Face à une difficulté, pose-toi la question : « Qu'est-ce que cette situation peut m'apprendre ou avoir d'utile ? » Tu ne changes pas les faits, mais le sens que tu leur donnes — ce qui change l'émotion associée.</p>`},
  {t:"Formuler un objectif", d:`<p>Dis ton objectif au positif (« je veux réussir mon partiel » plutôt que « je ne veux pas rater »). Rends-le précis et vérifie qu'il dépend bien de toi. Imagine concrètement à quoi tu verras que c'est atteint.</p>`}
];

/* ------------------------- FICHE : CONSEILS DE RÉVISION ------------------------- */
const TIPS = [
  {title:"Découpe en petits blocs (Pomodoro)", body:`
    <p>Le cerveau se fatigue vite en continu. Travaille par sessions courtes : <span class="kw">20 à 25 minutes</span> de concentration, puis <span class="kw">5 minutes de pause</span>. Après 4 blocs, fais une pause plus longue.</p>
    <p>Ces micro-objectifs sont rassurants : on sait quand la séance s'arrête, ce qui aide à se lancer sans appréhension.</p>`},
  {title:"Utilise les couleurs et les images", body:`
    <p>La mémoire visuelle est puissante. Attribue <span class="kw">une couleur par thème</span> (par ex. bleu pour la méthodo, orange pour la clinique) et garde-la partout : cartes, fiches, surligneurs.</p>
    <p>Transforme un concept abstrait en <span class="kw">image concrète</span> ou en petite scène : plus c'est visuel et un peu drôle, mieux ça se retient.</p>`},
  {title:"Fais des cartes mentales", body:`
    <p>Plutôt que de longs paragraphes, dessine une <span class="kw">carte mentale</span> : le thème au centre, des branches pour les idées, des mots-clés et des dessins. La structure en arbre correspond bien à une pensée visuelle et donne une vue d'ensemble d'un coup d'œil.</p>`},
  {title:"Répète de façon espacée", body:`
    <p>On oublie vite ce qu'on ne revoit pas. La <span class="kw">répétition espacée</span> consiste à revoir une notion à intervalles croissants : le jour même, puis 1 jour, 3 jours, 1 semaine, 1 mois plus tard.</p>
    <p>C'est exactement ce que permet le quiz de cette appli : reviens-y régulièrement, tes points faibles ressortent dans « Maîtrise par thème ».</p>`},
  {title:"Teste-toi (effet de test)", body:`
    <p>Se <span class="kw">tester</span> est bien plus efficace que relire passivement ses notes. L'effort de récupération renforce le souvenir. Ferme le cours et essaie de tout redire, puis vérifie.</p>
    <div class="callout ok"><span class="ct">À retenir</span>Relire = confortable mais peu efficace. Se tester = un peu inconfortable mais très efficace.</div>`},
  {title:"Garde une routine et un cadre stable", body:`
    <p>Réviser au <span class="kw">même endroit</span> et à des <span class="kw">horaires réguliers</span> réduit la charge mentale : le cerveau n'a pas à « décider », il se met en mode travail automatiquement. Un cadre prévisible sécurise et aide à la concentration.</p>`},
  {title:"Un seul objectif par séance", body:`
    <p>Fixe un but clair et unique pour chaque session (« aujourd'hui : les 4 stades de Piaget »). Un objectif à la fois évite la surcharge et procure un vrai sentiment de réussite à la fin.</p>`},
  {title:"Soigne ton environnement sensoriel", body:`
    <p>Limite les distractions : bureau rangé, téléphone en mode avion, <span class="kw">casque anti-bruit</span> si besoin. Un environnement calme et épuré diminue la fatigue et rend la concentration beaucoup plus facile.</p>`},
  {title:"Dors et bouge", body:`
    <p>Le <span class="kw">sommeil</span> consolide la mémoire : réviser puis bien dormir vaut mieux que réviser tard dans la nuit. Un peu d'activité physique et des pauses réelles améliorent aussi l'attention et l'humeur.</p>`}
];
