from io import BytesIO
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)


def generate_meeting_pdf(text: str) -> bytes:
    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        rightMargin=0.7 * inch,
        leftMargin=0.7 * inch,
        topMargin=0.7 * inch,
        bottomMargin=0.7 * inch,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "MeetingTitle",
        parent=styles["Title"],
        fontSize=24,
        leading=28,
        alignment=TA_CENTER,
        spaceAfter=8,
    )

    subtitle_style = ParagraphStyle(
        "MeetingSubtitle",
        parent=styles["Normal"],
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.grey,
        spaceAfter=25,
    )

    section_style = ParagraphStyle(
        "SectionHeading",
        parent=styles["Heading2"],
        fontSize=14,
        leading=18,
        spaceBefore=16,
        spaceAfter=8,
    )

    body_style = ParagraphStyle(
        "MeetingBody",
        parent=styles["BodyText"],
        fontSize=10.5,
        leading=16,
        spaceAfter=8,
    )

    bullet_style = ParagraphStyle(
        "MeetingBullet",
        parent=body_style,
        leftIndent=14,
        firstLineIndent=-8,
        spaceAfter=6,
    )

    story = []

    # Header
    story.append(
        Paragraph(
            "AI Meeting Assistant",
            title_style,
        )
    )

    story.append(
        Paragraph(
            "Professional Meeting Notes",
            subtitle_style,
        )
    )

    current_section = None

    for line in text.split("\n"):
        line = line.strip()

        if not line:
            continue

        # Section headings
        if line == "# Meeting Summary":
            current_section = "summary"
            story.append(
                Paragraph(
                    "Meeting Summary",
                    section_style,
                )
            )
            continue

        if line == "# Key Decisions":
            current_section = "decisions"
            story.append(
                Paragraph(
                    "Key Decisions",
                    section_style,
                )
            )
            continue

        if line == "# Action Items":
            current_section = "actions"
            story.append(
                Paragraph(
                    "Action Items",
                    section_style,
                )
            )
            continue

        # Bullet points
        if line.startswith("- "):
            content = escape(line[2:].strip())

            story.append(
                Paragraph(
                    f"• {content}",
                    bullet_style,
                )
            )
            continue

        # Normal paragraph
        story.append(
            Paragraph(
                escape(line),
                body_style,
            )
        )

    doc.build(story)

    pdf = buffer.getvalue()
    buffer.close()

    return pdf
